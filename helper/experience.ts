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
      "Managed and led a team of four frontend developers and two designers, successfully integrating all aspects of the application development process, including planning, requirements analysis, design (APIs design, UI/UX design), development, testing, and continuing support",
      "Optimized team performance by studying the personalities of team members and assigning tasks that matched their strengths, ensuring the best use of resources and achieving project objectives",
      "Developed reusable frontend components, created user experience graphics, and organized development resources for a modular approach to the project",
      "Enhanced page performance by 95% for data-intensive applications, including tracking systems and map-based solutions, optimizing load times and ensuring a smoother user experience",
      "Designed and implemented advanced analysis pages utilizing D3.js and Highcharts for data visualization, providing users with deep insights and interactive graphical representations of complex datasets.",
      "Developed a high-performance tracking system managing over 5,000 vehicles with real-time monitoring. Integrated playback functionality, enabling users to review vehicle activity for specific dates, while ensuring optimal system performance",
    ],
    position: "Frontend Engineer",
    date: `4/2023 - Present over ${getYearsSinceDate(
      new Date("2023"),
      new Date("2025")
    )} years`,
    linkProject: "",
    location: "Remote",
    titleDesc: "",
    nestedProject: [
      {
        title: "Facilitrol-X",
        tipDesc: "",
        desc: [],
        linkProject: "https://facilitrol-x.io/",
        location: "United Arab Emirates - Dubai",
        descShort:
          "Facilitrol-X is an all-in-one CMMS and CAFM solution designed to streamline your facility management by integrating with IoT data, BMS, and existing systems. Gain complete visibility of your assets, equipment, and maintenance operations, along with real-time IoT insights, all on a single cloud-based platform. Facilitrol-X simplifies the complex, making facility management more efficient, proactive, and data-driven.",
      },
      {
        title: "MEDXSOL",
        tipDesc: "",
        desc: [],
        linkProject: "https://medxsol.com/",
        location: "",
        descShort:
          "The Integrated Medication and Blister Pack Management System represents a sophisticated solution designed to streamline medication management for healthcare facilities, pharmacies, and patients alike. This innovative system combines cutting-edge technology with user-friendly interfaces to ensure accurate medication",
      },
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
            desc: [
              "ABIOT's End To End Solution For Managing Your Fleet Through Real-Time Tracking, Route Optimization, Vehicle, And Driver Management, And Continuous Vehicle Health Monitoring.",
            ],
          },
          {
            title: "Asset Watch",
            desc: [
              "ABIOT's Solutions For Smart Lock & Asset Tracking Solutions. This State-Of-The-Art Technology Lets You Remotely Monitor, Control And Secure Your Assets From Anywhere In The World. Stay Informed With Real-Time Notifications And Alerts For Greater Visibility.",
            ],
          },
          {
            title: "Facility Booking",
            desc: [
              "ABIOT's Facility Booking IoT Solution For Efficiently Managing Building Spaces, Track Spaces Workload And Unauthorized Booking Through Optimized Sensors And IoT Platform",
            ],
          },
        ],
      },
      {
        title: "Aligner-KDS",
        tipDesc: "",
        desc: [],
        linkProject: "https://barrancomtl.alignerkds.com/",
        location: "",
        descShort:
          "Aligner-KDS is an advanced kitchen display system designed to optimize restaurant operations. This state-of-the-art solution features an intuitive interface, real-time order management, and enhanced communication between kitchen and front-of-house staff. It includes an admin dashboard, a super admin dashboard, a kitchen screen for real-time order display,an order screen, and a customer display screen showing the current order number. The system also offers real-time inventory management, detailed order analytics.",
      },
    ],
    tools: [
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
        srcImage: "/tech/tailwind.svg",
        title: "Tailwind css",
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
    scrImage: "/company/disruptx.jpeg",
    title: "Disrupt-x",
    desc: [
      "Contributed to the development of a large-scale IoT project, collaborating with various IoT solutions and assisting in selecting the appropriate architecture for system orientation",
      "Handled Google Maps integration and implemented all map-related functionalities, including tracking systems, geofencing, pullbacks, clustering, and performance optimization to efficiently manage large-scale map data",
      "Developed reusable frontend components, created user experience graphics, and supported the organization of development resources for a modular approach to the project.",
      "Worked alongside a team of six frontend developers and two designers, participating in all aspects of the application development process, including planning, requirements analysis, API design, UI/UX design, development, testing, and ongoing support",
      "Designed and implemented a dynamic reporting system using Vue.js that allowed users to create and schedule PDF reports. The reports were customizable and included various visualization tools such as charts and graphs to help users gain valuable insights",
      "Developed powerful analysis pages featuring D3 visualization tools, delivering critical insights to end-users",
    ],
    position: "Frontend Engineer",
    date: `5/2021 - 4/2023 over ${getYearsSinceDate(
      new Date("2021"),
      new Date("2024")
    )} years`,
    linkProject: "",
    location: "Dubai, United Arab Emirates",
    titleDesc: "",
    nestedProject: [
      {
        descNestedProject: "some of the new solutions a worked on:",
        nestedProject: [
          {
            title: "Fleet Management",
            link: "https://cloud.disrupt-x.io/global/core/market/main/fleet-management",
            desc: [
              "IoT Solution For Managing Your Fleet Through Real-Time Tracking, Route Optimization, Vehicle, And Driver Management, And Continuous Vehicle Health Monitoring.",
            ],
          },
          {
            title: "Metro Locks",
            link: "https://cloud.disrupt-x.io/global/core/market/main/metro-watch",
            desc: [
              "IoT Solution For Securing Your Assets Efficiently. Metro Watch Solution Offers Smart Padlocks, Smart Parking And Tracking Solutions To Secure And Manage Your Assets Using An IoT Cloud Platform And Mobile App.",
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
        location: "",
        descShort:
          "Global IOT Solutions Platform is a UAE-based platform provider that is committed to leveraging the growth of technology and digitalization through the development of smart AI-based solutions that deliver",
      },
    ],
    tools: [
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
        srcImage: "/tech/tailwind.svg",
        title: "Tailwind css",
        disc: `In use since: 2021, over ${getYearsSinceDate(
          new Date("2021")
        )} years`,
      },
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
    date: `1/2020 - 4/2021 over ${getYearsSinceDate(
      new Date("2020"),
      new Date("2021")
    )} years`,
    title: "Freelance",
    linkProject: "",
    position: "FullStack",
    titleDesc: "",
    location: "Dubai, United Arab Emirates",
    desc: [
      "Led the development of car dealership and real estate management systems, working independently using Laravel, MySQL, and Nuxt.js",
      "Created dynamic admin dashboards for managing property and vehicle listings, with advanced features like custom fields, validation, and data filtering",
      "Implemented server-side rendering with Nuxt.js for improved SEO, along with OAuth Sign-in (Facebook, Google, Apple) to enhance user authentication and security",
      "Integrated efficient data handling with MySQL, ensuring optimal performance and scalability for both platforms",
    ],
    nestedProject: [
      {
        descNestedProject: "",
        title: "Alkamel",
        tipDesc: "",
        desc: [],
        linkProject: "",
        location: "",
        descShort:
          "is a platform for renting and selling cars. It offers a wide range of vehicles for customers to choose from, whether they are looking to rent for a short period or purchase a vehicle outright. The platform connects buyers, sellers, and renters, providing detailed listings with pricing, vehicle specifications, and user reviews. It aims to make the car rental and buying process smooth and convenient with easy online booking, secure payments, and customer support services to assist users throughout their journey.",
      },
      {
        descNestedProject: "",
        title: "BenaaHouse",
        tipDesc: "",
        desc: [],
        linkProject: "",
        location: "",
        descShort:
          "is a platform for renting, buying, and selling properties. It offers a diverse selection of residential and commercial properties, catering to those looking to rent for a short term or invest in real estate. The platform connects property owners, agents, and potential buyers or renters, providing detailed listings with pricing, property specifications, and user reviews. With easy online booking, secure transactions, and a customer support team, AqarHub simplifies the process of finding and securing the perfect property, ensuring a seamless experience from start to finish.",
      },
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
