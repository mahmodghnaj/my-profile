const Footer = () => {
  return (
    <>
      <footer className="py-6 font-medium text-md">
        <div className="container mx-auto px-5 relative z-10">
          <div className="flex justify-between flex-col md:flex-row">
            <p className="">© {new Date().getFullYear()} Mahmod Ghnaj</p>
            {/* <div className="flex flex-wrap md:justify-end -mx-3">
              <div className="px-3">
                <a
                  className="transition duration-150 ease-in-out hover:text-neutral-600"
                  href="/privacy"
                >
                  Privacy Notice
                </a>
              </div>
              <div className="px-3">
                <a
                  className="transition duration-150 ease-in-out hover:text-neutral-600"
                  href="/imprint"
                >
                  Imprint
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
