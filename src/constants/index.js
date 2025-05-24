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
  leo,
  figma,
  docker,
  meta,
  weatherapp,
  movie,
  jobit,
  threejs,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Web Developer", icon: web },
  { title: "Machine Learning Engineer", icon: mobile },
  { title: "Python Developer", icon: backend },
  { title: "App Developer", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
    name: "Weather App",
    description:
      "A sleek and responsive weather forecasting app that provides real-time weather updates using OpenWeatherMap API. It displays current temperature, humidity, wind speed, and conditions for any searched city, with a clean UI built using HTML, CSS, and JavaScript.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/CodingEnthus/Weather-App",
  },
  {
    name: "Movie Recommender System",
    description:
      "A movie recommendation system that uses machine learning algorithms to suggest movies based on user preferences. It features a user-friendly interface built with Streamlit.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Streamlit", color: "green-text-gradient" },
      { name: "Scikit-learn", color: "pink-text-gradient" },
    ],
    image: movie,
    source_code_link: "https://github.com/CodingEnthus/Movie_recommendation_system",
  },
  {
    name: "Jarvis AI",
    description:
      "A comprehensive assistant powered by Python and Flask. It can automate tasks, answer questions, and assist with voice commands. Clean UI and Python logic.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
    ],
    image: leo,
    source_code_link: "https://github.com/CodingEnthus/Leo-AI",
  },
];

export { services, technologies, experiences, testimonials, projects };
