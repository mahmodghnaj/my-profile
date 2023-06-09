import { getYearsSinceDate } from "./utils";

interface projectsType {
  scrImage: string;
  date?: string;
  title: string;
  linkProject: string;
  position: string;
  location?: string;
  titleDesc: string;
  desc?: string[];
  tools: {
    srcImage: string;
    title: string;
    disc: string;
    classImage?: string;
  }[];
}
export const projects: projectsType[] = [
  {
    scrImage: "/company/logo.svg",
    title: "ChatXo",
    position: "Real-time Chat Application",
    linkProject: "https://chat-xo.vercel.app/",
    titleDesc: "Real-time Chat Application with Next.js 13 and Nest.js",
    desc: [
      " Built using Next.js 13 and Nest.js for an optimized and modular architecture.",
      " Implemented server-side rendering (SSR) for improved SEO and faster initial load times.",
      "Enabled real-time messaging using WebSockets for instant communication between users.",
      "Designed and developed an intuitive UI for friend mapping, including adding, deleting, and searching friends.",
      "Integrated social media login and registration for seamless user onboarding and authentication.",
      "Added middleware in Next.js 13 for user authentication and secure access to protected routes.",
      "Utilized server-side logic in Next.js 13 for efficient data fetching and management.",
      "Ensured code quality and maintainability through consistent use of design patterns and best practices.",
    ],
    tools: [
      {
        srcImage: "/tech/next.svg",
        classImage:
          "backdrop-opacity-[0.8] backdrop-invert-[0.8] backdrop-saturate-0 hover:backdrop-invert-0 rounded-full",
        title: "Next",
        disc: `In use since: 2022, over ${getYearsSinceDate(
          new Date("2022")
        )} years`,
      },
      {
        srcImage: "/tech/tailwind.svg",
        title: "Tailwind",
        disc: `In use since: 2021, over ${getYearsSinceDate(
          new Date("2021")
        )} years`,
      },
      {
        srcImage: "/tech/redux.svg",
        title: "Redux Toolkit",
        disc: `In use since: 2021, over ${getYearsSinceDate(
          new Date("2021")
        )} years`,
      },
      {
        srcImage: "/tech/socket.svg",
        title: "Socket Io",
        disc: `In use since: 2021, over ${getYearsSinceDate(
          new Date("2021")
        )} years`,
      },
      {
        srcImage: "/tech/typescript.svg",
        title: "TypeScript",
        disc: `In use since: 2020, over ${getYearsSinceDate(
          new Date("2020")
        )} years`,
      },
      {
        srcImage: "/tech/node.svg",
        title: "Node js",
        disc: `In use since: 2020, over ${getYearsSinceDate(
          new Date("2020")
        )} years`,
      },
      {
        srcImage: "/tech/nest.svg",
        title: "NestJs",
        disc: `In use since: 2021, over ${getYearsSinceDate(
          new Date("2021")
        )} years`,
      },
      {
        srcImage: "/tech/mongodb.svg",
        title: "Mongodb",
        disc: `In use since: 2021, over ${getYearsSinceDate(
          new Date("2021")
        )} years`,
      },
    ],
  },
];
