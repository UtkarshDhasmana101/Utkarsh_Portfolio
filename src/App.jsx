import { BrowserRouter } from "react-router-dom";
import heroVideo from "./assets/hero.mp4";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
<BrowserRouter>
  <div className="relative z-0 bg-black">
    <video
      className="fixed top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
      src={heroVideo}
      autoPlay
      loop
      muted
    />
        <div className="fixed inset-0 bg-black opacity-60"></div>

    <div className="relative z-10">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  </div>
</BrowserRouter>
  );
};

export default App;
