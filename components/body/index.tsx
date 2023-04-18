import Image from "next/image";
import About from "./components/about";
import Education from "./components/education";
import EndSection from "./components/end-section";
import Experience from "./components/experience";
import InfoPersonal from "./components/info-personal";
import Skills from "./components/skills";

About;
const Body = () => {
  return (
    <>
      <div className="pt-4 relative">
        <div className="block rounded-full w-56 h-56 sm:w-56 mx-auto transform overflow-hidden mb-8 relative">
          <Image
            priority
            src="/me.jpg"
            className="absolute inset-0 rounded-full"
            alt="Mahmod Ghnaj"
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>
        <InfoPersonal />
        <About />
        <Skills />
        <Experience />
        <Education />
        <EndSection />
      </div>
    </>
  );
};
export default Body;
