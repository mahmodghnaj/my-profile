const Footer = () => {
  return (
    <>
      <footer className="py-6 font-medium text-md">
        <div className="container mx-auto px-5 relative z-10">
          <div className="flex justify-between flex-col md:flex-row">
            <p className="">© {new Date().getFullYear()} Mahmod Ghnaj</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
