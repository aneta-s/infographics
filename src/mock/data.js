import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Aneta Stojanowska | Web & Mobile Designer', // e.g: 'Name | Developer'
  lang: 'nl, en, pl', // e.g: en, es, fr, jp
  description: `I'm a designer and a web developer and I build beautifully designed web and mobile projects. With UX/UI best practices I use the latest trends in the industry. I'm an open source contributor and blogger. My ambition is to make the client happy with a fast and bug free products. Could you use some help on design and frontend? Or do you have any questions? Git in touch!`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Aneta Stojanowska',
  subtitle: `I'm a Web & Mobile Designer.`,
  cta: 'My projects',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Professional and enthusiastic designer and web developer with knowledge of Web and Mobile design, web development and UX/UI. Able to build beautifully designed web and mobile projects. Functions as a bridge between the various disciplines, monitors Agile principles and ensures that both design and frontend work smoothly towards the same goals.`,
  paragraphTwo: `I’m an open source contributor and enjoy participating in design sprints. In my spare time I write blog posts for the web development community to help other designers and developers understand a topic.`,
  paragraphThree: ``,
  resume: 'https://medium.com/@anetastojanowska', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'doorgaan.jpg',
    title: `Web and Mobile event organizer for event visitors and promoters, designed from scratch.`,
    info: `A clean, simple and responsive event organizer featuring a self service agenda, adding events, mailings by e-mail and Facebook integration. Agenda sections to feature promoter dashboard, event listing, about page, registration page.`,
    info2: 'Technologies used: Sketch, HTML5, CSS3, Git, Visual Studio Code, NPM',
    url: 'https://aneta-s.github.io/doorgaan.info/events-list.html',
    repo: 'https://drive.google.com/file/d/1itA0IYy72MeSaoyV8tYHKti9FEIAGFBS/view?usp=sharing', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'smart.jpg',
    title: 'Responsive face detection app from the scratch.',
    info: `Smart Brain is a face detection software. Equipped with user authentication and a ranking system, a full-stack image recognition app that uses a subset of artificial intelligence (AI) with Machine Learning and Clarifai API.`,
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
    img: 'react.jpg',
    title: 'React app Robofriends from scratch.',
    info: `Although lightweight, the Robofriends application is making use of ReactJS library. This application generates a list of users from an API. The features include filtering users, search box, scroll bar, loading time, error boundary message and a customized logo.`,
    info2: 'Technologies used: React.js, RESTful API, JSON, Git, Visual Studio Code, NPM.',
    url: 'https://aneta-s.github.io/robofriends/',
    repo: 'https://github.com/aneta-s/robofriends', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'ux.jpg',
    title: 'UX / UI related cases I made including Data Visualization.',
    info: `In my UX / UI portfolio I show how I, as a designer, trade professionally in real-life situations. The material is always presented against the background of the situation in which that material played a role.`,
    info2: `Tools & Methodologies used: Sketch, Photoshop, Illustrator, Figma, Sketching.`,
    url: `https://drive.google.com/file/d/12b4lbx5PUu55S9XgB2fMKK42n-z9j_W4/view?usp=sharing`,
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
