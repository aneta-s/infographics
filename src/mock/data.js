import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Aneta Stojanowska | Product Designer', // e.g: 'Name | Developer'
  lang: 'nl, en, pl', // e.g: en, es, fr, jp
  description: `I'm a Product Designer and I build beautifully designed web and mobile projects. With UX/UI practices I use the latest trends in the industry. I'm a problem solver and blogger. My ambition is to make the client happy with a user-friendly digital products. Could you use some help on design and front-end? Or do you have any questions? Git in touch!`, // e.g: Welcome to my website
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'habitual.png',
    title: `PROBLEM.`,
    info: `A recent survey found that Habitual’s UX ranks highest among > 45 years old. The problem I’m tasked with solving on this project is to redesign their website and make it more appealing for younger users > 25 years old.`,
    info2: `Platform: Mobile`,
  },
  {
    id: uuidv1(),
    img: 'uwv.png',
    title: `ROLE(S) PLAYED.`,
    info: `I am the sole Designer within a virtual Agile team working with the contributors remotely and the tasks are discussed in Trello during daily standups. I am responsible for the esthetics and the UX including planning of the project and using this information to make the challenge reality. `,
    info2: `Skills performed: Sketches, user flows, site maps, high fidelity wireframes, prototypes, responsive design in CSS, LEAN Startup`,
  },
  {
    id: uuidv1(),
    img: 'arbeidsmarkt.png',
    title: `RESEARCH.`,
    info: `The research proved that older users get flustered by more complicated websites, while younger users tend to favor websites with a UX that is visual and intuitive in nature, which would repel less tech-savvy users.`,
    info2: ``,
  },
  {
    id: uuidv1(),
    img: 'smart.jpg',
    title: `SOLUTION.`,
    info: `Assuming every generation knows how to perform a text search, I added a search bar to find products easily. Moreover, I personalized the search results by adding a screen with Interests. The algorithm can then personalize the homepage with personalized recommendations (to ensure that visitors find more of what they want, and enhances the site experience to drive customer loyalty), including recent browser history.`,
    info2: ``,
  },
  {
    id: uuidv1(),
    img: 'react.jpg',
    title: `CHALLANGES.`,
    info: `Altering an effective UX to both existing users while staying consistent in its design is risky. Older generations are more averse to website changes than younger generations. Nevertheless, I decided to keep the basic structure of the navigation and replaced the navbar with browsing history and personalized recommendations.`,
    info2: ``,
  },
  {
    id: uuidv1(),
    img: 'ux.jpg',
    title: `IMPACT.`,
    info: `Adding personalized recommendations increase the chance of remembering and buying what the users like.  The clunky product category buttons were replaced into a header menu, which simplified the navigation area and improved its readability. This way Habituals navigation becomes more streamlined.`,
    info2: ``,
  },
  {
    id: uuidv1(),
    img: 'habitual.png',
    title: `LESSONS LEARNED.`,
    info: `During launch phase I’ve realized how important it is to constantly tweak the site to align with buyer motivations. For example, I’ve learned that if customers want our product both cheaper and recommended, it is good to emphasize text such as “50% OFF” or “STAFF PICK” with i.e. bold black text. Constantly testing of pages helped me to grow and retain a loyal customer base.`,
    info2: ``,
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Next`,
  btn: 'Previous',
  url: 'https://twitter.com/a_stojanowska',
  repo: `https://codepen.io/aneta-s`,
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
