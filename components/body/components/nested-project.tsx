import { nestedProjectType } from "@/helper/experience";
import styles from "../body.module.css";
interface nestedProjectProps {
  nestedProject: nestedProjectType;
}
const NestedProject = ({ nestedProject }: nestedProjectProps) => {
  return (
    <>
      <div>
        <h3 className="text-lg flex items-baseline mb-1 leading-tight font-semibold">
          {nestedProject.title}
          {nestedProject.linkProject && (
            <a
              href={nestedProject.linkProject}
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
        <div className="leading-tight text-lg text-neutral-500">
          {nestedProject.location}
        </div>
        <div className="mb-2">
          <span className="text-md leading-tight font-semibold">
            {nestedProject.title} :
          </span>
          &nbsp; {nestedProject.descShort}
        </div>
        <div className="leading-tight text-lg mb-2 text-neutral-500">
          {nestedProject.tipDesc}
        </div>
        {nestedProject.desc && (
          <ol className={styles.bullets}>
            {nestedProject.desc.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ol>
        )}
        <div className="leading-tight text-lg mb-5 mt-2 text-neutral-500">
          {nestedProject.descNestedProject}
        </div>
        <div className={styles.timeline}>
          <div className={styles.outer}>
            {nestedProject.nestedProject?.map((nested, index) => (
              <div key={index} className={styles.card}>
                <div className={`${styles.info}`}>
                  <h3
                    className={`${styles.title} text-md mb-2 flex   leading-tight font-semibold`}
                  >
                    {nested.title}
                    {nested.link && (
                      <a
                        href={nested.link}
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
                  <ol className={styles.bullets}>
                    {nested.desc.map((d, i) => (
                      <p className="text-neutral-600" key={i}>
                        {d}
                      </p>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default NestedProject;
