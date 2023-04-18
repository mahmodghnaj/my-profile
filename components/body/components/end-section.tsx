const EndSection = () => {
  return (
    <>
      <div className="flex items-center flex-col py-32 px-4">
        <div className="text-2xl text-stone-800 text-center">
          Thanks for scrolling 🤓
        </div>
        <div className="text-2xl font-semibold text-stone-900 mb-4 text-center">
          Feel free to say hi!
        </div>
        <div className="text-lg">
          <a
            className="hover:text-ccprimary"
            href="mailto:mahmodghnaj1@gmail.com?subject=Hi!"
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
      </div>
    </>
  );
};

export default EndSection;
