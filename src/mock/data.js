import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Aneta Stojanowska | Frontend Web Developer', // e.g: 'Name | Developer'
  lang: 'nl, en, pl', // e.g: en, es, fr, jp
  description: `With my Full Stack Developer education I'm now Frontend Web Developer, open source contributor and blogger. I build digital products with less code and make them user friendly. My ambition is to make the client happy with a fast and bug free products. Have a product that could use some frontend help? Have a question? Git in touch!`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Aneta Stojanowska',
  subtitle: `I'm a Frontend Web Developer.`,
  cta: 'Find more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Energetic and enthusiastic Frontend Web Developer with knowledge of design, frontend and backend and experience with database technology and UX issues. Able to build a working and professional web application. Functions as a bridge between the various disciplines, monitors agile principles and ensures that both backend and frontend work smoothly towards the same goals.`,
  paragraphTwo: `I’m an open source contributor and enjoy participating in hackathons. In my spare time I write blog posts for the development community to help other developers understand a topic and their code.`,
  paragraphThree: ``,
  resume: 'https://medium.com/@anetastojanowska', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'react.jpg',
    title: 'React app Robofriends from scratch.',
    info: `Although lightweight, the Robofriends application is making use of ReactJS library. This application generates a list of users from an API. The features include filtering users, search box, scroll bar, loading time, error boundary message and a customized logo.`,
    info2: 'Technologies used: React.js, RESTful API, JSON, Git, Visual Studio Code, NPM.',
    url: 'https://aneta-s.github.io/robofriends/',
    repo: 'https://github.com/aneta-s/robofriends', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'smart.jpg',
    title: 'Smart Brain.',
    info: `A face detection software. Equipped with user authentication and a ranking system, a full-stack image recognition app that uses a subset of artificial intelligence (AI) with Machine Learning and Clarifai API. The front-end part of this project is finished. Currently, working on the back-end part of this project and will be put in production soon.`,
    info2: `Technologies used: React.js, Node, JSX, RESTful API, VSC, NPM, Git, Express, Postgress, ClarifaiAPI.`,
    url: 'https://aneta-s.github.io/recognition-app/',
    repo: 'https://github.com/aneta-s/recognition-app', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'generator.jpg',
    title: 'Gradient generator in JavaScript.',
    info: `This gradient generator is not a full website, but rather an online tool that generates gradient backgrounds in JavaScript. The user uses buttons to blend two colors for a customized rainbow effect. It also generates a random backgrounds, using two random numbers for the color inputs.`,
    info2: 'Technologies used: JavaScript, Bootstrap, HTML, CSS3.',
    url: 'https://aneta-s.github.io/gradient/',
    repo: 'https://github.com/aneta-s/gradient', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'resume.jpg',
    title: 'Resume/CV website in Bootstrap 4.',
    info: `A clean, simple and open source resume/CV landing page, featuring fixed side navigation with scrolling page anchors. Resume sections contain work experience, education, skills and stylish icons.`,
    info2: 'Technologies used: JavaScript, Bootstrap 4, SCSS, HTML.',
    url: 'https://aneta-s.github.io/startbootstrap-resume/',
    repo: 'https://github.com/aneta-s/startbootstrap-resume', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'ux.jpg',
    title: 'UX / UI related cases I made including Data Visualization.',
    info: `In my UX / UI portfolio I show how I, as a designer, trade professionally in real-life situations. The material is always presented against the background of the situation in which that material played a role.`,
    info2: `Tools & Methodologies used: Sketch, Photoshop, Illustrator, Figma, Sketching.`,
    url: `https://drive.google.com/file/d/1312O0BkkBaJV3oZOxJ7P_fiCH6tBX2lM/view`,
    repo: ``, // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Strives to work in teams with other experts and find efficient solutions for customers with complex needs. Let’s do something amazing.`,
  btn: 'Contact',
  email: 'a.stojanowska23@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/a_stojanowska',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/aneta-s',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/stojanowska',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/aneta-s',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
