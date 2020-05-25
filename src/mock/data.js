import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Aneta Stojanowska | Frontend Web Developer', // e.g: 'Name | Developer'
  lang: 'nl, en, pl', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Aneta Stojanowska',
  subtitle: `I'm a Frontend Web Developer`,
  cta: 'Hire me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Energetic and enthusiastic Frontend Web Developer with knowledge of design, frontend and backend and experience with database technology and UX issues. Able to build a working and professional web application. Functions as a bridge between the various disciplines, monitors agile principles and ensures that both backend and frontend work smoothly towards the same goals.`,
  paragraphTwo: `Strives to work in teams with other developers and find efficient solutions for customers with complex needs.  I’m an open source contributor and enjoy participating in hackathons.`,
  paragraphThree: `In my free time I write blog posts for development community and help other developers understand a topic, or with their code.`,
  resume: 'https://medium.com/@anetastojanowska', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'React app Robofriends from the scratch.',
    info: `Although lightweight, Robofriends application is making use of ReactJS library. This application generates a list of users from an API. The features include filtering users, search box, scroll bar, loading time and error boundary message and customized logo.`,
    info2: 'Technologies used: React, RESTful API, Git, Visual Studio Code, NPM',
    url: 'https://aneta-s.github.io/robofriends/',
    repo: 'https://github.com/aneta-s/robofriends', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Let’s do something amazing.`,
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
