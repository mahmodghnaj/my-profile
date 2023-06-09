import { projects } from "@/helper/projects";
import Image from "next/image";
import styles from "../body.module.css";

const Projects = () => {
  return (
    <>
      <div className=" max-w-2xl mx-auto mb-8 px-5">
        <h2 className="uppercase font-bold text-ccprimary mb-3 text-xl">
          Projects
        </h2>
        <div className="pl-8">
          <ol className="relative border-l-4  border-neutral-300 pt-3 -ml-4 lg:-ml-6">
            {projects.map((item, index) => {
              return (
                <div key={index}>
                  <li className="lg:hidden pl-12 mb-3 -ml-[20px] md:ml-0">
                    <Image
                      src={item.scrImage}
                      className="mix-blend-multiply max-w-[120px] max-h-[80px]"
                      alt={item.title}
                      loading="lazy"
                      width={120}
                      height={80}
                    />
                  </li>
                  <li className="pt-1 lg:pt-0  ml-12 relative text-neutral-90 break-inside-avoid mb-12 lg:mb-16">
                    <span className="flex absolute -left-[60px] top-[25px] lg:top-[23px] justify-center items-center w-5 h-5 bg-white rounded-full border-4 border-ccprimary"></span>
                    <div className="mb-4 lg:mb-0 -ml-[20px] md:ml-0 lg:absolute lg:-left-[305px] lg:pr-4 lg:w-56  lg:items-end lg:flex-col lg:h-16 lg:justify-center hidden lg:flex">
                      <Image
                        src={item.scrImage}
                        className="mix-blend-multiply max-w-[120px] max-h-[80px]"
                        alt={item.title}
                        loading="lazy"
                        width={120}
                        height={80}
                      />
                    </div>
                    <div className="-ml-[20px] md:ml-0 ">
                      <time className="block text-sm font-normal leading-tight">
                        <span className="">{item.date}</span>
                      </time>

                      <h3 className="text-2xl flex items-baseline mb-1 leading-tight font-semibold">
                        {item.title}
                        {item.linkProject && (
                          <a
                            href={item.linkProject}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ccprimary"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              className="ml-0.5 h-5"
                            >
                              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                            </svg>
                          </a>
                        )}
                      </h3>

                      <div className="leading-tight text-lg">
                        {item.position}
                      </div>
                      {item.location && (
                        <div className="leading-tight text-lg text-neutral-500">
                          {item.location}
                        </div>
                      )}
                      <div className="mb-3 "></div>
                      {item.titleDesc && (
                        <div className="text-lg  flex items-baseline mb-1 leading-tight font-semibold">
                          {item.titleDesc}
                        </div>
                      )}
                      {item.desc && (
                        <ol className={styles.bullets}>
                          {item.desc.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ol>
                      )}
                      <div className="leading-tight text-lg text-neutral-400 mt-6 mb-1">
                        Technologies used:
                      </div>
                      <div className="flex flex-wrap relative">
                        {item.tools.map((tool, ind) => (
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
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default Projects;
