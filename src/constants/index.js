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
  animo,
  carrent,
  jobit,
  digitalDada,
  tripguide,
  threejs,
  ehub,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Animo",
    icon: animo,
    iconBg: "#383E56",
    date: "Oct 2022 - Present",
    points: [
      "Responsible for developing the company website.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Currently developing Admin Dashboard using React and libraries such as MUI and TailwindCSS.  ",
    ],
  },
  {
    title: "React Developer",
    company_name: "engineerHUB",
    icon: ehub,
    iconBg: "#000011",
    date: "Jun 2022 - Feb 2023",
    points: [
      "Responsible for designing, developing, and deploying the website using React.",
      "Utilized various React libraries such as React Router, and Material UI to develop responsive and scalable components that worked seamlessly across different devices and browsers.",
      "Implemented efficient coding practices such as code splitting, lazy loading, and caching to optimize the website's performance and speed",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Digital-Dada",
    icon: digitalDada,
    iconBg: "#383E56",
    date: "Oct 2021 - Mar 2022",
    points: [
      "Responsible for designing and developing many websites for clients using WordPress and plugins such as Elementor and WooCommerce.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const projects = [
  {
    name: "Trello Board Clone",
    description:
      "It is a simple Task List (ReactJs) and its UI is much similar to that of Trello Card. You can use CRUD operations in the cards as well as on the lists.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Rahul-ku-Mo/Action-Plan",
  },
  {
    name: "Social Media",
    description:
      "It is a social Media App, you can create an account and tweet your posts and reply to others.Firestore handles most of the backend services like auth and DBMS .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Rahul-ku-Mo/twiitter",
  },
  {
    name: "Trip Guide",
    description:
      "It fetches location returns weather based on your IP address and enter the city name to fetch current weather and hourly forecast and some highlights.",
    tags: [
      {
        name: "VanillaJs",
        color: "blue-text-gradient",
      },
      {
        name: "OpenWeatherAPI",
        color: "green-text-gradient",
      },
      {
        name: "css3",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Rahul-ku-Mo/WeatherApp",
  },
];

export { services, technologies, experiences, projects };
