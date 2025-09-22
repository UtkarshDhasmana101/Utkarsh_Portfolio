import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/dh.glb');

  // Whether light should be "on" logically
  const [isOn, setIsOn] = useState(false);

  // Ref to the point light so we can animate its intensity
  const pointLightRef = useRef();

  // target intensity (0 off, 100 on)
  const targetIntensity = useRef(0);

  // speed of the animation (larger => faster)
  const SPEED = 3.0;

  // useFrame runs every animation frame; lerp current intensity toward target
  useFrame((state, delta) => {
    const light = pointLightRef.current;
    if (!light) return;

    // linear interpolation toward target
    // new = current + (target - current) * (1 - exp(-k * delta))
    // simplified to lerp(current, target, t) where t = 1 - exp(-SPEED * delta)
    const t = 1 - Math.exp(-SPEED * delta);
    light.intensity += (targetIntensity.current - light.intensity) * t;

    // optional: small pulsing on top of main intensity when fully on
    if (Math.abs(light.intensity - targetIntensity.current) < 0.001) {
      light.intensity = targetIntensity.current;
    }
  });

  // toggle handler
  const handleToggle = () => {
    const next = !isOn;
    setIsOn(next);
    targetIntensity.current = next ? 300 : 0;
  };

  return (
    <mesh>
      <hemisphereLight intensity={2.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      {/* Animated Point Light (starts at intensity 0) */}
      <pointLight
        ref={pointLightRef}
        position={[0, 2, 2]} // adjust as needed
        intensity={0}
        distance={50} // controls falloff distance
        decay={2} // physically-based decay
        color="white"
        castShadow
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 1.5 : 2.5}
        position={isMobile ? [-0.4, -3, -2.2] : [0, -4.1, 0.2]}
        rotation={[-0.01, -11.4, 0]}
        // Use pointer down for snappy interaction; onClick also works
        onPointerDown={(e) => {
          e.stopPropagation();
          handleToggle();
        }}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
