import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Aneta Stojanowska | Product Designer', // e.g: 'Name | Developer'
  lang: 'nl, en, pl', // e.g: en, es, fr, jp
  description: `I'm a Product Designer and I build beautifully designed web and mobile projects. With UX/UI practices I use the latest trends in the industry. I'm a problem solver and blogger. My ambition is to make the client happy with a user-friendly digital products. Could you use some help on design and frontend? Or do you have any questions? Git in touch!`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `HELLO - I'm Aneta,`,
  name: 'a Product Designer',
  subtitle: `based in Amsterdam, the Netherlands.`,
  cta: 'My projects',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: `Professional and enthusiastic Product Designer with knowledge of Web and Mobile design, Web development and UX/UI. Able to create beautifully designed web and mobile interfaces that serves countless people in many different roles, but which all fit consistently in platforms. 
  Uses different facets and tools of design to create and execute a solution that solves for a user’s experience deficiencies.`,
  paragraphTwo: `I’m a problem solver and enjoy participating in Design Sprints. In my spare time I write blog posts for the frontend community to help other designers understand a topic.`,
  paragraphThree: ``,
  resume: 'https://medium.com/@anetastojanowska', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'habitual.png',
    title: `Web and Mobile e-commerce website redesign for Habitual.`,
    info: `A recent survey found that Habitual’s UX ranks highest among > 45 years old. The problem I’m tasked with solving on this project is to redesign their website and make it more appealing for younger users > 25 years old.`,
    info2: `Skills performed: Project Management, Modern Tools, Goal Conversion, Graphic Design, UX`,
    url: 'https://github.com/aneta-s/gatsby-simplefolio/blob/master/src/habitual_case.pdf',
    repo: 'https://drive.google.com/file/d/1itA0IYy72MeSaoyV8tYHKti9FEIAGFBS/view?usp=sharing', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'uwv.png',
    title: `Web and Mobile complex homepage redesign for UWV`,
    info: `Our website got negative reviews because users were frustrated with the digital services on the website visited by almost million visitors daily. Based on the content of the reviews, I hypothesized that users were overwhelmed by the content and the website’s cluttered appearance.`,
    info2: `Skills performed: Platform Development, Modern Tools, Goal Conversion, UX`,
    url: 'https://github.com/aneta-s/gatsby-simplefolio/blob/master/src/uwv_case.pdf',
    repo: 'https://github.com/aneta-s/recognition-app',
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
    title: 'Graphic Design and UX / UI related cases I made including Data Visualization.',
    info: `In my UX / UI portfolio I show how I, as a designer, trade professionally in real-life situations. The material is always presented against the background of the situation in which that material played a role.`,
    info2: `Tools & Methodologies used: Sketch, Photoshop, Illustrator, Figma, Sketching, GitHub, Git, online resources for A/B testing.`,
    url: `https://drive.google.com/file/d/1QQlpMVzVYqgOI2joqRMmLNcjiNkJB3Ph/view?usp=sharing`,
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
