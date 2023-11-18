import Image from "next/image";

const InfoPersonal = () => {
  return (
    <div className="flex justify-center flex-col items-center mb-6">
      <div className="divide-y divide-neutral-400">
        <h1 className="text-center mb-3">
          <span className="block font-bold text-3xl">Mahmod Ghnaj</span>
          <span className="block font-bold text-xl">Software Engineer</span>
          <span className="block font-semibold text-neutral-500 dark:text-slate-400  text-lg ">
            Fullstack · TypeScript · NextJs · React · Vue · NodeJS
          </span>
        </h1>
        <div className="text-neutral-500 dark:text-slate-400 pt-3 font-semibold flex flex-col items-center text-md">
          <div>
            <a
              className="hover:text-ccprimary"
              href="mailto:mahmodghnaj1@gmail.com"
            >
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 mr-2"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                mahmodghnaj1@gmail.com
              </span>
            </a>
          </div>
          <span className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              ></path>
            </svg>
            Syria
          </span>
          <div className="mt-2 flex">
            <div className="w-8 h-8 mb-3 flex items-center justify-center mr-3 relative">
              <a target="_blank" href="https://github.com/mahmodghnaj">
                <Image
                  className="max-w-8 max-h-8  dark:brightness-200	 grayscale hover:grayscale-0  tech-hover-effect"
                  src="/social/github.svg"
                  alt="github icon"
                  loading="lazy"
                  height={32}
                  width={32}
                />
              </a>
            </div>
            <div className="w-8 h-8 mb-3 flex items-center justify-center mr-3 relative">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mahmod-ghnaj"
              >
                <Image
                  className="max-w-8 max-h-8  grayscale hover:grayscale-0 tech-hover-effect"
                  src="/social/linkedin.svg"
                  alt="linkedin icon"
                  loading="lazy"
                  height={32}
                  width={32}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoPersonal;
