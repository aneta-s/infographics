import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Aneta Stojanowska | Product Designer', // e.g: 'Name | Developer'
  lang: 'nl, en, pl, es', // e.g: en, es, fr, jp
  description: `I'm a Product Designer and I build beautifully designed web and mobile projects. With UX/UI practices I use the latest trends in the industry. I'm a problem solver and blogger. My ambition is to make the client happy with a user-friendly digital products. Could you use some help on design and front-end? Or do you have any questions? Git in touch!`, // e.g: Welcome to my website
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'habitual.png',
    title: `PROBLEM.`,
    info: `Our website got negative reviews because users were frustrated with the digital services on the website visited by almost million visitors daily. Based on the content of the reviews, I hypothesized that users were overwhelmed by the content and the website’s cluttered appearance.`,
    info2: `Platform: Web & mobile.`,
  },
  {
    id: uuidv1(),
    img: 'uwv.png',
    title: `ROLE(S) PLAYED.`,
    info: `I was the sole UX designer whose job was to continuously bring value to our users. This involved collaborating closely with them while implementing design activities in order to solve the right problems in the right way. I was taking care of usability aspects during the iterative process while designing and testing the various results with users.`,
    info2: `Skills performed: Problem analyses, (User)research, sketches, user flows, site maps, lo fi & high-fidelity wireframes, responsive design in Bootstrap`,
  },
  {
    id: uuidv1(),
    img: 'arbeidsmarkt.png',
    title: `RESEARCH.`,
    info: `Interviews and user research showed that users were not aware of where to start when applying for the dole or notifying changes in their living situation.`,
    info2: `I decided to adjust the design of the main task so that it is more prominent on the homepage.`,
  },
  {
    id: uuidv1(),
    img: 'smart.jpg',
    title: `SOLUTION.`,
    info: `By translating user flows into site maps and applying design task at hand I could see the context of how people apply for the dole. The prototypes showed how to accomplish the main tasks in an easy to understand way.`,
    info2: `Users were able to go from A to B in order of importance, using a format that is visually intuitive to follow without being distracted by other action options.`,
  },
  {
    id: uuidv1(),
    img: 'react.jpg',
    title: `CHALLANGES.`,
    info: `During the Launch phase, I went through several origin design that ultimately did not completely satisfy the majority of elderly users.`,
    info2: `In menu design, it featured tasks that were split across multiple screens, but it caused frustration because it required the user to remember their previous actions.`,
  },
  {
    id: uuidv1(),
    img: 'ux.jpg',
    title: `IMPACT.`,
    info: `The prototype’s of focus was on how the process should direct the user and lead them through the layers to complete the action.`,
    info2: `By separating primary from secondary actions, the prototype provides a clear starting point on the homepage and users are not overwhelmed with extraneous content.`,
  },
  {
    id: uuidv1(),
    img: 'habitual.png',
    title: `LESSONS LEARNED.`,
    info: `Because of this project, I realized the importance of prototype testing and client interaction for exploring new design concepts.`,
    info2: `It made me test new designs to make sure they were viable solutions for users who use digital technology differently.`,
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Next`,
  btn: 'Back',
  url: 'https://aneta-infographics-uxprocess.netlify.app',
  repo: `https://aneta.netlify.app/#projects`,
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
