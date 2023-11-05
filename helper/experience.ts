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
  nestedProject?: nestedProjectType[];
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
    desc: [
      "Designed and built a library of reusable components that seamlessly integrated into the system, promoting code reusability and streamlining development processes.",
      "Collaborated on the development of a real-time ticketing system for customer support, enabling efficient and immediate assistance to customers, enhancing their overall experience.",
      "Significantly improved front-end performance by implementing image optimization techniques, including the use of the WebP format, lazy loading, and server-side optimizations, in conjunction with clean coding practices, resulting in accelerated website load times and a better user experience.",
      "Designed and implemented robust and scalable architectures for web applications, ensuring their efficiency, maintainability, and adaptability to changing requirements.",
      "Developed Vue.js wrapper libraries for Google Maps and ZingChart, simplifying the integration of these powerful tools into web applications, enhancing data visualization and interactivity.",
      "Contributed to the development of tracking and security applications, implementing solutions to enhance data security, monitoring, and protection, thereby ensuring the safety and integrity of sensitive information.",
      "Strengthened data processing and visualization capabilities, with a specific focus on mapping applications, to effectively handle and present large datasets, offering improved data insights and user experiences.",
      "Implemented multilingual support by translating the website into various languages to cater to a diverse user base.",
    ],
    position: "Frontend Engineer",
    date: `4/2021 - over ${getYearsSinceDate(new Date("2021"))} years`,
    linkProject: "",
    location: "Remote",
    titleDesc: "",
    nestedProject: [
      ////Disrupt-x
      {
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
        tipDesc: "",
        desc: [],
        linkProject: "https://disrupt-x.io/",
        location: "United Arab Emirates - Dubai",
        descShort:
          "Global IOT Solutions Platform is a UAE-based platform provider that is committed to leveraging the growth of technology and digitalization through the development of smart AI-based solutions that deliver",
      },
      ////ABIOT
      {
        title: "ABIOT",
        tipDesc: "",
        desc: [],
        linkProject: "https://abiot.io/",
        location: "Saudi Arabia - Riyadh",
        descShort:
          "ABIOT is the Smart Solutions Division at ABM (Arabian Business Machines) Olayan Group. Minimize downtime, reduce costs and drive enterprise-wide operational excellence",
        descNestedProject: "some of the new solutions a worked on:",
        nestedProject: [
          {
            title: "Smart Next",
            link: "https://abiot.io/global/core/market/main/SmartNext",
            desc: [
              "ABIOT's End To End Solution For Managing Your Fleet Through Real-Time Tracking, Route Optimization, Vehicle, And Driver Management, And Continuous Vehicle Health Monitoring.",
            ],
          },
          {
            title: "Asset Watch",
            link: "https://abiot.io/global/core/market/main/asset-watch",
            desc: [
              "ABIOT's Solutions For Smart Lock & Asset Tracking Solutions. This State-Of-The-Art Technology Lets You Remotely Monitor, Control And Secure Your Assets From Anywhere In The World. Stay Informed With Real-Time Notifications And Alerts For Greater Visibility.",
            ],
          },
          {
            title: "Facility Booking",
            link: "https://abiot.io/global/core/market/main/facility-booking",
            desc: [
              "ABIOT's Facility Booking IoT Solution For Efficiently Managing Building Spaces, Track Spaces Workload And Unauthorized Booking Through Optimized Sensors And IoT Platform",
            ],
          },
        ],
      },

      ////Al-Futtaim Engineering and Technologies
      {
        title: "Alfuttaim Technology",
        tipDesc: "",
        desc: [],
        linkProject: "https://iot.alfuttaim.technology/",
        location: "UAE, KSA & Qatar",
        descShort:
          "Leaders in complete engineering and system integration solutions since 1974, operating in the UAE, KSA & Qatar.",
      },
    ],

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
