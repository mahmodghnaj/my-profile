import ToggleMode from "./toggleMode";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between container mx-auto pt-2 md:pt-8 px-4 md:px-6 items-center">
        <div className="w-32 md:w-40 lg:w-64">
          <ToggleMode />
        </div>
        <div className="relative inline-block text-left z-30">
          <div>
            <a href="/files/mahmod-ghnaj.pdf" download={"mahmod-ghnaj"}>
              <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="hidden md:block">Download CV</span>
                <span className="md:hidden">PDF</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
