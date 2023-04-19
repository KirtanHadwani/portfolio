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
  creart,
  tesla,
  shopify,
  carrent,
  jobit,
  gallery,
  tripguide,
  threejs,
  postman,
  technomark,
  perfectmatch,
  bootstrap,
  armanali,
  kirtanhadwani,
  ronakrajput,
  hotstar,
  reading,
  programming,
  sketching,
  music,
  sport,
  hiking,
  woffy,
  tatvasoft,
  brainy,
  chirag,
  harsh,
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
    title: "Sports",
    icon: sport,
  },
  {
    title: "Programming",
    icon: programming,
  },
  {
    title: "Hiking",
    icon: hiking,
  },
  {
    title: "Music",
    icon: music,
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
    name: "Boostrap",
    icon: bootstrap,
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
    name: "postman",
    icon: postman,
  },
];

const experiences = [
  {
    title: "React Js Developer",
    company_name: "TechnoMark Solution LLP",
    icon: technomark,
    iconBg: "#E6DEDD",
    date: "January 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and integrated with backback using Node.js and other related technologies.",
      "Collaborating with Backend teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "Front-End Developer",
    company_name: "TatvaSoft",
    icon: tatvasoft,
    iconBg: "#383E56",
    date: "June 2022 - July 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Brainy Beam",
    icon: brainy,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Php Developer",
    company_name: "CreArt Solution",
    icon: creart,
    iconBg: "#383E56",
    date: "June 2022 - July 2022",
    points: [
      "Developing and Email Sending web applications using Php and other related technologies.",
      "Collaborating with different people on teams including other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our requirement in backend product, but Kirtan proved me wrong.",
    name: "Arman Ali",
    designation: "Backend Developer",
    company: "Pecific Group Of Companies",
    image: armanali,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kirtan does. and working with him was amazing experience for me",
    name: "Chirag Makwana",
    designation: "Font-End Developer",
    company: "TechnoMark Solution LLP",
    image: chirag,
  },
  {
    testimonial:
      "After Kirtan has collabrated with me on out college project our website, our effeciany increased by 50%. We can't thank him enough!",
    name: "Harsh Dhaduk",
    designation: "Sinior Software Developer",
    company: "TechnoMark Solution LLP",
    image: harsh,
  },
];

const projects = [
  {
    name: " Woffy The Pet Shop",
    description:
      "Web-based Matrimonial platform that allows users to search about other profiles  and manage their own profile from various interested people to view, providing a convenient and efficient solution for marriage needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react-bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: woffy  ,
    source_code_link: "https://github.com/KirtanHadwani/Woffy-The-pet-shop",
  },
  {
    name: "Gallery",
    description:
      "Web application that let user to filer many type of flowers using react filter. such as SunFlower, Daisy, Rose, Orchid and All, made with react js, html, css and node module. fun project and task i have complited under few minutes for fun development, i have also use bootstrap fo",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: gallery,
    source_code_link: "https://kirtanhadwani.github.io/Image-Gallery/",
  },
  {
    name: "Desiny + Hotstar",
    description:
      "A Desiny + Hotstar Clone Font End website made with HTML, CSS and JavaScript, Interactive interface with animation and video playback for proving user batter experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hotstar,
    source_code_link: "https://kirtanhadwani.github.io/Hotstar-Disney-Clone/",
  },
];

export { services, technologies, experiences, testimonials, projects };
