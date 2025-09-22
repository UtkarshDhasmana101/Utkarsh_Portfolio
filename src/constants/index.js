import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  shopify,
  PwC,
  carrent,
  argenie,
  jobit,
  c,
  cpp,
  csharp,
  python,
  tripguide,
  threejs,
  java,
  unity,
  sql,
  firebase
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Game Developer",
    icon: web,
  },
  {
    title: "Application Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Video Editor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Unity Developer Intern",
    company_name: "AR Genie Inc.",
    icon: argenie,
    iconBg: "#FFFFFF",
    date: "June 2025 - August 2025",
    points: [
      "Contributed to the design and development of spatial AR experiences using Unity Engine and AR Foundation",
      "Collaborated on optimizing AR applications for performance across AR devices including AR glasses such as Hololens and tablets (e.g., iPad), resulting in a 25% increase in frame rates",
      "Leveraged RESTful APIs in Unity to enable real-time communication with a FastAPI and MongoDB based SaaS backend, ensuring seamless data exchange for AR interactions and cross-device content rendering"
    ],
  },
  {
    title: "PwC Data Analytics and AI Launchpad Trainee",
    company_name: "PricewaterhouseCoopers",
    icon: PwC,
    iconBg: "#E6DEDD",
    date: "February 2025 - July 2025",
    points: [
  "Selected among 1,600+ students for PwC’s Data Analytics and AI Launchpad Program 2025.",
  "Completed certification in IT Fundamentals, RDBMS, and Object-Oriented Programming in Python.",
  "Gained hands-on experience in Data Analytics and Artificial Intelligence through structured training and projects.",
  "Strengthened problem-solving and analytical skills by applying Python, databases, and AI concepts to real-world scenarios."
],

  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Poultry Care",
    description:
      "An Augmented Reality app using Unity for AI-based poultry disease diagnosis and treatment, combining Random Forest symptom prediction, CNN image classification, real-time interactive overlays, optimized memory via Unity Addressables, and cloud storage/sync with Firebase to reduce app size.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/UtkarshDhasmana101/Poultry-cARe",
  },
  {
    name: "Blades of Midnight",
    description:
    "Blades of Midnight is a first-person gothic 3D hack-and-slash game with multi-terrain environments, featuring dynamic sword-slashing via precise mouse control, immersive visuals through custom shaders and VFX, and optimized performance using low-poly models, batching, and object pooling.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "blender",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/UtkarshDhasmana101?tab=repositories",
  },
  {
    name: "Intellitrace",
    description:
      "A desktop app for 3D crime scene reconstruction & AI analysis, enabling visualization, tagging, and probabilistic modeling of suspects, victims, evidence, timelines, plus contradiction detection (via RoBERTa), anomaly detection for spatio-temporal data, and scoring to uncover inconsistencies.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "machine-learning",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/UtkarshDhasmana101?tab=repositories",
  },
];

export { services, technologies, experiences, testimonials, projects };