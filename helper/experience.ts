import { getYearsSinceDate } from "./utils";
export interface nestedProjectType {
  title: string;
  desc: string[];
  linkProject?: string;
  location?: string;
  descShort?: string;
  tipDesc?: string;
  nestedProject?: {
    title: String;
    desc: string[];
    link?: string;
  }[];
  descNestedProject?: string;
}

interface experienceType {
  scrImage: string;
  date: string;
  title: string;
  linkProject: string;
  position: string;
  location: string;
  titleDesc: string;
  desc?: string[];
  nestedProject?: nestedProjectType;
  tools: {
    srcImage: string;
    title: string;
    disc: string;
    classImage?: string;
  }[];
}
export const experience: experienceType[] = [
  {
    scrImage: "/company/unifi-solutions.jpeg",
    title: "Unifi Solutions",
    position: "Frontend Engineer",
    date: `4/2021 - over ${getYearsSinceDate(new Date("2021"))} years`,
    linkProject: "",
    location: "Remote",
    titleDesc: "Development of an e-commerce platform",
    nestedProject: {
      descNestedProject: "some of the new solutions a worked on:",
      nestedProject: [
        {
          title: "Metro Locks",
          link: "https://cloud.disrupt-x.io/global/core/market/main/metro-watch",
          desc: [
            " IoT Solution For Securing Your Assets Efficiently. Metro Watch Solution Offers Smart Padlocks, Smart Parking And Tracking Solutions To Secure And Manage Your Assets Using An IoT Cloud Platform And Mobile App.",
          ],
        },
        {
          title: "Fleet Management",
          link: "https://cloud.disrupt-x.io/global/core/market/main/fleet-management",
          desc: [
            "End To End Solution For Managing Your Fleet Through Real-Time Tracking, Route Optimization, Vehicle, And Driver Management, And Continuous Vehicle Health Monitoring.",
          ],
        },
        {
          title: "Smart Parking",
          link: "https://cloud.disrupt-x.io/global/core/market/main/urban-ai",
          desc: [
            "IoT solutions for efficiently managing parking spaces, tracking parking space utilizations and to prevent unauthorized accesses and overstays through optimized sensors and IoT platform .",
          ],
        },
        {
          title: "Facility Booking",
          link: "https://cloud.disrupt-x.io/global/core/market/main/urban-ai",
          desc: [
            " IOT solution for efficiently managing building spaces, track spaces workload and unauthorized booking through optimized sensors and IoT platform",
          ],
        },
        {
          title: "Cloud Orbit",
          link: "https://cloud.disrupt-x.io/global/core/market/main/rodent",
          desc: [
            "Believes In A Greener And Cleaner Environment. To Contribute To This, We Have Developed An End IoT Solution For Community Managers And Municipalities That Will Allow Them To Monitor Waste Fill Levels And Rodent Infestations.",
          ],
        },
        {
          title: "Cognitive Neurons",
          link: "https://cloud.disrupt-x.io/global/core/market/main/anpr",
          desc: [
            "AI Based Solution For Convenient Entry And Exit From Parking Spaces Using Smart ANPR (Automated Number Plate Recognition).",
          ],
        },
      ],
      title: "Disrupt-x",
      tipDesc: "innovative IoT products . during my time at Disrupt-X i did:",
      desc: [
        "Developed Reusable Components around the System",
        "Worked on Real Time Ticketing system for customer support",
        "Developed and implemented architectures for web applications",
        "worked on wrapper Vue js libraries for google map and zingchart",
      ],
      linkProject: "https://disrupt-x.io/",
      location: "United Arab Emirates - Dubai",
      descShort:
        "Global IOT Solutions Platform is a UAE-based platform provider that is committed to leveraging the growth of technology and digitalization through the development of smart AI-based solutions that deliver",
    },

    tools: [
      {
        srcImage: "/tech/vue.svg",
        title: "Vue",
        disc: `In use since: 2021, over ${getYearsSinceDate(
          new Date("2021")
        )} years`,
      },
      {
        srcImage: "/tech/quasar.png",
        title: "Quasar",
        disc: `In use since: 2021, over ${getYearsSinceDate(
          new Date("2021")
        )} years`,
      },
      {
        srcImage: "/tech/google-map.svg",
        title: "Google Map",
        disc: `In use since: 2021, over ${getYearsSinceDate(
          new Date("2021")
        )} years`,
      },
      {
        srcImage: "/tech/zenchart.jpeg",
        title: "zing Chart",
        disc: `In use since: 2021, over ${getYearsSinceDate(
          new Date("2021")
        )} years`,
      },
      {
        srcImage: "/tech/saas.svg",
        title: "Saas",
        disc: `In use since: 2021, over ${getYearsSinceDate(
          new Date("2021")
        )} years`,
      },
      {
        srcImage: "/tech/azure.svg",
        title: "Azure",
        disc: `In use since: 2021, over ${getYearsSinceDate(
          new Date("2021")
        )} years`,
      },
    ],
  },
  {
    scrImage: "/company/freelace.png",
    date: `1/2020 - over ${getYearsSinceDate(new Date("2020"))} years`,
    title: "Freelance",
    linkProject: "",
    position: "FullStack",
    titleDesc: "",
    location: "",
    desc: [
      "Understanding the client's requirements and developing a project plan accordingly.",
      "Designing and developing user-friendly and responsive websites or web applications.",
      "Developing both the front-end and back-end of the website or application.",
      "Testing and debugging the website or application to ensure that it meets the client's requirements and is free from errors.",
      "Deploying the website or application on the server and ensuring that it is running smoothly.",
      "Providing maintenance and support services to the client after the website or application has been delivered.",
    ],
    tools: [
      {
        srcImage: "/tech/typescript.svg",
        title: "TypeScript",
        disc: `In use since: 2020, over ${getYearsSinceDate(
          new Date("2020")
        )} years`,
      },
      {
        srcImage: "/tech/react.svg",
        title: "React",
        disc: `In use since: 2021, over ${getYearsSinceDate(
          new Date("2021")
        )} years`,
      },
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
        srcImage: "/tech/vue.svg",
        title: "Vue",
        disc: `In use since: 2020, over ${getYearsSinceDate(
          new Date("2020")
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
        srcImage: "/tech/node.svg",
        title: "Node js",
        disc: `In use since: 2020, over ${getYearsSinceDate(
          new Date("2020")
        )} years`,
      },
      {
        srcImage: "/tech/nest.svg",
        title: "Nest js",
        disc: `In use since: 2021, over ${getYearsSinceDate(
          new Date("2021")
        )} years`,
      },
      {
        srcImage: "/tech/laravel.svg",
        title: "Laravel",
        disc: `In use since: 2020, over ${getYearsSinceDate(
          new Date("2020")
        )} years`,
      },

      {
        srcImage: "/tech/mongodb.svg",
        title: "Mongo",
        disc: `In use since: 2020, over ${getYearsSinceDate(
          new Date("2020")
        )} years`,
      },
      {
        srcImage: "/tech/mysql.svg",
        title: " mySql",
        disc: `In use since: 2020, over ${getYearsSinceDate(
          new Date("2020")
        )} years`,
      },

      {
        srcImage: "/tech/gitlab.svg",
        title: "Gitlab",
        disc: `In use since: 2020, over ${getYearsSinceDate(
          new Date("2020")
        )} years`,
      },
    ],
  },
];
