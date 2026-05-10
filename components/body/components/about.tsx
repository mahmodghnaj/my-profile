import { getYearsSinceDate } from "../../../helper/utils";
const About = () => {
  return (
    <>
      <section className="mb-8 max-w-2xl mx-auto px-5">
        <h2 className="uppercase font-bold text-ccprimary mb-3 text-xl">
          About
        </h2>
        <div className="text-md">
          <p>
            Hi! 👋 <br />
            I'm Mahmod, {getYearsSinceDate(new Date("1998/1/25"))}, and a Senior
            Full-Stack Developer specializing in Vue, React, Node.js, and
            TypeScript. With over {getYearsSinceDate(new Date("2020/1/1"))}{" "}
            years of professional experience, I build scalable, high-performance
            web applications that solve real business problems and deliver
            long-term value.
          </p>

          <p className="mt-4 print:mt-1">
            Throughout my career, I have architected and developed complex
            platforms in domains such as IoT, fleet management, AI automation,
            medical systems, real estate, and automotive solutions. I have
            extensive experience with modern frameworks and technologies
            including React, Next.js, Vue, Nuxt.js, NestJS
          </p>

          <p className="mt-4 print:mt-1">
            I focus on clean architecture, maintainable code, and practical
            solutions. My approach is straightforward: understand the business
            requirements deeply, avoid unnecessary complexity, and build
            software that is reliable, efficient, and easy to evolve.
          </p>

          <p className="mt-4 print:mt-1">
            I am proficient in cutting-edge technologies while also having a
            strong understanding of the core principles behind them. My
            expertise is based on real-world experience and in-depth
            knowledge—not just tutorials.
          </p>

          <p className="mt-4 print:mt-1">
            I stay up to date with the latest trends and best practices in web
            development to ensure that every application I build is optimized
            for performance, accessibility, security, and scalability.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
