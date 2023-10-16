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
  starbucks,
  apixel,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bitcoin,
  unity,
  exoworlds,
  spinx,
  zillow,
  techtiq,
  exoworldsBg,
  smsj,
  scribble,
  zepbo,
  eyal,
  st1,
  atlas1,
  gd3,
  c1,
  unrealEngine
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
    title: "Unity Developer",
    icon: unity,
  },
  {
    title: "Unreal Engine Developer",
    icon: unrealEngine,
  },
  {
    title: "Web Game",
    icon: web,
  },
  {
    title: "Mobile Game",
    icon: mobile,
  },
  {
    title: "PC Game",
    icon: backend,
  },
  {
    title: "Web3 Game",
    icon: bitcoin,
  },
];

const technologies = [
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Unreal Engine Developer",
    company_name: "ExoWorlds",
    icon: exoworlds,
    iconBg: "#E6DEDD",
    date: "May 2022 - July 2023",
    points: [
      "Responsible for developing Exoworlds game works on Android and Apple.",
      "Built a fully-fledged working color palette shader using unreal engine shader Lab.",
      "Created SpaceShip project within a highly dynamic and iterative team environment",
      "Design, develop, test and maintain quality code and documentation.",
      "Worked as a team, contributing to important design decisions and conversations",
      "Developed prototypes and experiments, while researching and recommending new ideas, new tools, and technologies."
    ],
  },
  {
    title: "Unreal Engine Developer",
    company_name: "APixel",
    icon: apixel,
    iconBg: "#383E56",
    date: "Jul 2021 - May 2022",
    points: [
      "Prototyped new interactions and features with an eye toward intuitive usability and feel.",
      "Architected efficient and reusable systems that drive complex game logics",
      "Derived design and implementation for proposed playful and creative projects.",
      "Designed/documented processes and procedures required for moving prototypes to production environment.",
      "Created/modified high-quality, low-polygon 3D assets and materials for use in real-time applications.",
      "Analyze, evaluate design, develop, integrate, debug and test real-time AR and VR software for advanced prototypes and user experiences.",
      "Wrote high performance code, debug complex problems that span systems, prioritize ruthlessly and get things done with a high level of efficiency and quality.",
    ],
  },
  {
    title: "Game Developer",
    company_name: "SPINX",
    icon: spinx,
    iconBg: "#383E56",
    date: "Feb 2020 - May 2021",
    points: [
      "Coordinated with 7 team members to design and develop a 3D imaging application for radiation resource localizations in an Augmented Reality environment in Unity, C#, and Mixed Reality Toolkit.",
      "Examined and experimented with user interface implementations through the Microsoft Hololens2 device to enhance a smooth and reliable user experience.",
      "Initiated responsibility for optimizing a codebase to enhance performance and improve the efficiency of radiations image algorithms, resulting in a 40% increase in fps performance.",
    ],
  },
  {
    title: "Unity Developer Intern",
    company_name: "TechTIQ Solutions",
    icon: techtiq,
    iconBg: "#E6DEDD",
    date: "Jul 2019 - Feb 2020",
    points: [
      "Implemented a 40+ satisfactory user experience with no issues, errors, or downtime.",
      "Created and optimized systems played an active role in testing and troubleshooting, and increased accessibility and browser compatibility by 40%.",
      "Finished 3 small projects alone using MERN or MEVN stack for faster cross-platform development.",
      "Built back-end APIs using Firebase cloud functions, a real time database, and cloud messaging.",
      "Solved a payment integration problem that required high security and accuracy for different user banks.",
      "Transformed monolithic app to microservices using Spring Boot via 12-factor app methodology.",
      "Oversaw centralized configuration & centralized logging by deploying.",
      "Spring config server & Splunk, respectively."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend John Lee, a talented threejs programmer who has demonstrated exceptional problem-solving skills, extensive knowledge, and remarkable speed in completing tasks. I am sure you will be more than pleased with John's services!",
    name: "Eyal Shiri",
    designation: "CEO",
    company: "Sinapis Technologies",
    image: eyal,
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but John proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like John does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After John optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ExoWorlds",
    description:
      "Large-Scale web3 P2E game. You can travel the EXO space with you spaceship and fight to Enemies.",
    tags: [
      {
        name: "Unreal Engine",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "solidity",
        color: "orange-text-gradient",
      },
    ],
    image: st1,
    source_code_link: "https://exoworlds.io/",
  },
  {
    name: "Granny's Day Off",
    description:
      "Granny's Day Off is a split-screen 1 vs 1 competitive third person pie thrower where you compete against another grandma to gain more points to win.",
    tags: [
      {
        name: "Unreal Engine",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "GitHub",
        color: "pink-text-gradient",
      },
      {
        name: "Jira",
        color: "orange-text-gradient",
      },
    ],
    image: gd3,
    source_code_link: "https://b00pster.itch.io/grannys-day-off",
  },
  {
    name: "UNTOLD ATLAS",
    description:
      "An Expedition-themed Romance Visual Novel mobile game where you explore a mysterious island called Aethra which once shined with an ancient technology before being lost to the depths of the sea and revealed itself on the surface many centuries later.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
    ],
    image: atlas1,
    source_code_link: "https://play.google.com/store/apps/details?id=com.NochiStudios.UntoldAtlas",
  },
  {
    name: "PROJECT NOVA: CELLOSSEUM",
    description:
      "A combination of Rogue-like and Bullet Hell game inspired by Nova Drift where you play as a cell to fight against endless waves of other harmful cells in the arena with unique upgrades & abilities! About 50 WolverineSoft Studio members collaborated together to develop the game during the the summer of 2023..",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Bitbucket",
        color: "pink-text-gradient",
      },
    ],
    image: c1,
    source_code_link: "https://store.steampowered.com/app/2557580/Cellosseum/?beta=1",
  },
];

export { services, technologies, experiences, testimonials, projects };
