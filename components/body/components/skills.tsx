import { getYearsSinceDate } from "../../../helper/utils";
import Image from "next/image";
interface typeSkills {
  srcImage: string;
  classImage?: string;
  title: string;
  disc: string;
}
const skills: typeSkills[] = [
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
    title: "Tailwind css",
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
    srcImage: "/tech/mongodb.svg",
    title: "Mongo",
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
];
const Skills = () => {
  return (
    <>
      <section className="mb-8 max-w-2xl mx-auto px-5">
        <h2 className="uppercase font-bold text-ccprimary mb-3 text-xl">
          Skills
        </h2>
        <div className="mb-1 text-md">Technology I use on a daily basis:</div>
        <div className="flex flex-wrap mt-2 relative ">
          {skills.map((value, index) => {
            return (
              <div
                key={index}
                className="w-8 h-8 mb-3 flex items-center justify-center mr-3 md:relative"
              >
                <Image
                  className={`max-w-8 max-h-8 peer grayscale hover:grayscale-0  ${value.classImage}`}
                  src={value.srcImage}
                  alt={value.title}
                  loading="lazy"
                  height={32}
                  width={32}
                />
                <div
                  role="tooltip"
                  className="pointer-events-none peer-hover:opacity-90 absolute z-50 transition-opacity duration-150 ease-in -left-[10px] md:-left-[30px] top-10 w-[300px] py-2 px-3 text-sm  font-medium text-white bg-neutral-900 rounded-lg shadow-sm tooltip dark:bg-neutral-700 opacity-0"
                >
                  <div className="text-lg">{value.title}</div>
                  <div className="">{value.disc}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-md mt-8 md:mt-2">
          See more tech experience in the timeline below.
        </div>
      </section>
    </>
  );
};
export default Skills;
