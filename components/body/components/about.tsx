import { getYearsSinceDate } from "../../../helper/utils";
const About = () => {
  return (
    <>
      <section className="mb-8 max-w-2xl mx-auto px-5">
        <h2 className="uppercase font-bold text-ccprimary mb-3 text-xl">
          About
        </h2>
        <div className="text-lg">
          <p>
            Hi! 👋 <br />
            I&#180;m Mahmod, {getYearsSinceDate(new Date("1998/1/25"))}, and a
            Vue/React/Node/Typescript Fullstack developer. with 3 years of
            experience, I specialize in developing high-quality, scalable, and
            efficient web applications that meet business requirements.
          </p>
          <p className="mt-4">
            I have a strong proficiency in web development technologies, such as
            HTML, CSS, and JavaScript, as well as experience working with
            popular web development frameworks like React, Next, Vue, Nest. My
            experience also includes collaborating with cross-functional teams
            to develop new features, improve existing functionality, and
            troubleshoot issues. With a focus on continuous learning and
            professional development.
          </p>
          <p className="mt-4">
            I am proficient in cutting-edge technologies and also understand the
            fundamental principles of earlier days. In-depth knowledge, not just
            tutorials.
          </p>
          <p className="mt-4">
            I stay up-to-date with the latest web development trends and
            techniques to ensure that the applications I develop are optimized
            for performance, accessibility, and security. I am dedicated to
            delivering top-quality results and providing a positive.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
