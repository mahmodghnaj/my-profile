import Image from "next/image";
import styles from "../body.module.css";
import { getYearsSinceDate } from "../../../helper/utils";
interface typeSkills {
  srcImage: string;
  classImage?: string;
  title: string;
  disc: string;
}
const skills: typeSkills[] = [
  {
    srcImage: "/tech/block.png",
    title: "Block Chain",
    disc: `In use since: 2020, over ${getYearsSinceDate(
      new Date("2020")
    )} years`,
  },
  {
    srcImage: "/tech/ethereum.svg",
    title: "Ethereum",
    disc: `In use since: 2020, over ${getYearsSinceDate(
      new Date("2020")
    )} years`,
  },
  {
    srcImage: "/tech/smart-contracts.svg",
    title: "Smart Contracts",
    disc: `In use since: 2020, over ${getYearsSinceDate(
      new Date("2020")
    )} years`,
  },
  {
    srcImage: "/tech/solidity.svg",
    title: "Solidity",
    disc: `In use since: 2020, over ${getYearsSinceDate(
      new Date("2020")
    )} years`,
  },
  {
    srcImage: "/tech/truffle.png",
    title: "Truffle",
    disc: `In use since: 2020, over ${getYearsSinceDate(
      new Date("2020")
    )} years`,
  },
  {
    srcImage: "/tech/ganache.png",
    title: "Ganache",
    disc: `In use since: 2020, over ${getYearsSinceDate(
      new Date("2020")
    )} years`,
  },
  {
    srcImage: "/tech/js.svg",
    title: "Java Script",
    disc: `In use since: 2020, over ${getYearsSinceDate(
      new Date("2020")
    )} years`,
  },
  {
    srcImage: "/tech/web3.png",
    title: "Web3 js",
    disc: `In use since: 2020, over ${getYearsSinceDate(
      new Date("2020")
    )} years`,
  },
];

const Education = () => {
  return (
    <>
      <div className=" max-w-2xl mx-auto mb-8 px-5">
        <h2 className="uppercase font-bold text-ccprimary mb-3 text-xl">
          Education
        </h2>
        <div className="pl-8">
          <ol className="relative border-l-4  border-neutral-300 pt-3 -ml-4 lg:-ml-6">
            <div>
              <li className="lg:hidden pl-12 mb-3 -ml-[20px] md:ml-0">
                <Image
                  src="/company/images.jpeg"
                  className="mix-blend-multiply max-w-[120px] max-h-[80px]"
                  alt=".."
                  loading="lazy"
                  width={90}
                  height={80}
                />
              </li>
              <li className="pt-1 lg:pt-0  ml-12 relative text-neutral-90 break-inside-avoid mb-12 lg:mb-16">
                <span className="flex absolute -left-[60px] top-[25px] lg:top-[23px] justify-center items-center w-5 h-5 bg-white rounded-full border-4 border-ccprimary"></span>
                <div className="mb-4 lg:mb-0 -ml-[20px] md:ml-0 lg:absolute lg:-left-[305px] lg:pr-4 lg:w-56  lg:items-end lg:flex-col lg:h-16 lg:justify-center hidden lg:flex">
                  <Image
                    src="/company/images.jpeg"
                    className="mix-blend-multiply max-w-[120px] max-h-[80px]"
                    alt=".."
                    loading="lazy"
                    width={90}
                    height={80}
                  />
                </div>
                <div className="-ml-[20px] md:ml-0 ">
                  <time className="block text-sm font-normal leading-tight">
                    <span className="">01/2016 – 01/2020 · about 4 years</span>
                  </time>

                  <h3 className="text-2xl flex items-baseline mb-1 leading-tight font-semibold">
                    Information Technology
                  </h3>
                  <div className="leading-tight text-lg text-neutral-500">
                    Al-Baath University
                  </div>
                  <div className="mb-3 "></div>
                  <ol className={styles.bullets}>
                    <li>Specialization: Software Engineering</li>
                    <li>Thesis: A safe system for electronic voting</li>
                  </ol>

                  <div className="leading-tight text-lg text-neutral-400 mt-6 mb-1">
                    Technologies used:
                  </div>
                  <div className="flex flex-wrap relative">
                    {skills.map((tool, ind) => (
                      <div
                        key={ind}
                        className="w-8 h-8 mb-3 flex items-center justify-center mr-3 md:relative"
                      >
                        <Image
                          className={`max-w-8 max-h-8 peer grayscale hover:grayscale-0  ${tool.classImage}`}
                          src={tool.srcImage}
                          alt={tool.title}
                          loading="lazy"
                          height={32}
                          width={32}
                        />
                        <div
                          role="tooltip"
                          className="pointer-events-none peer-hover:opacity-90 absolute z-50 transition-opacity duration-150 ease-in -left-[10px] md:-left-[30px]  w-[300px] py-2 px-3 text-sm  font-medium text-white bg-neutral-900 rounded-lg shadow-sm tooltip dark:bg-neutral-700 opacity-0 top-20 md:top-10"
                        >
                          <div className="text-lg">{tool.title}</div>
                          <div className="">{tool.disc}</div>
                          <div className=""></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </div>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Education;
