import {
  meta,
  shopify,
  starbucks,
  tesla,
  bb,
  freelance,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  codepen,
  spotify
} from "../assets/icons";

export const socials = [
  {
    icon: linkedin,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/varad-patil-web-dev/"
  },
  {
    icon: github,
    name: "Github",
    url: "https://github.com/DevVaradPatil"
  },
  {
    icon: codepen,
    name: "Codepen",
    url: "https://codepen.io/varadPatil",
  }
]

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Web Developer",
    company_name: "Bubble Byte",
    icon: bb,
    iconBg: "#accbe1",
    date: "August 2022 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    company_name: "India",
    icon: freelance,
    iconBg: "#CDA0FF",
    date: "August 2023 - Present",
    points: [
      "Creating and managing full-stack web applications as a freelancer, with expertise in both front-end and back-end technologies.",
      "Collaborating closely with clients, designers, and other stakeholders to understand project requirements and deliver high-quality, tailored solutions.",
      "Implementing responsive design principles and ensuring seamless cross-browser compatibility for a consistent user experience.",
      "Engaging in thorough code reviews and offering constructive feedback to enhance the overall quality of the project, while working independently or as part of a remote cross-functional team.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: spotify,
    theme: "btn-back-green",
    name: "Full Stack Spotify",
    description:
      'Developed a full-stack Spotify clone, offering users an authentic music streaming experience with responsive design.',
    link: "https://github.com/DevVaradPatil/spotify-2.O",
    live: "https://spotify-2-o.vercel.app/"
  },
  {
    iconUrl: threads,
    theme: "btn-back-pink",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/DevVaradPatil/threads-app",
    live: "https://threads-app-sooty.vercel.app/"
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Full Stack E-commerce Store",
    description:
      "Ultimate sneaker shopping destination with our MERN-based full-stack e-commerce website, offering a seamless blend of style and technology.",
    link: "https://github.com/DevVaradPatil/snikrz",
    live: "http://snikrz.web.app/"
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-black",
    name: "Full Stack Trello Clone",
    description:
      "Your all-in-one task organizer powered by Next.js and OpenAI. Experience seamless task management with drag-and-drop feature.",
    link: "https://github.com/adrianhajdin/social_media_app",
    live: "https://organizify-by-varad-ass8e66kb-devvaradpatil.vercel.app/"
  },
];
