import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);

const ProjectCard = ({ projects, setOpenModal, openModal, setProjectId }) => {
  const [loadProjects, setLoadProjects] = useState();
  const [index, setIndex] = useState(4);

  useEffect(() => {
    setLoadProjects(projects.slice(0, index));
  }, [projects]);

  const handleLoadMore = () => {
    setLoadProjects(projects.slice(0, index + 4));
    setIndex(loadProjects?.length + 4);
  };

  const handleLoadLess = () => {
    setIndex(loadProjects?.length - 4);
    setLoadProjects(projects.slice(0, 4));
  };

  return (
    <>
      <div className={styles.container}>
        {projects &&
          loadProjects?.map((project, i) => (
            <div key={project.id} className={styles.contentContainer}>
              <div className={styles.cardWrapper}>
                <div className={styles.cardContainer}>
                  <Image
                    src={project.image[0]}
                    alt=""
                    layout="fill"
                    className={styles.cardImage}
                  />

                  <div className={styles.cardOverlay}>
                    <button
                      onClick={() => {
                        setOpenModal(!openModal);
                        setProjectId(project.id);
                      }}
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
              <h3 className={styles.cardName}>{project.title}</h3>
            </div>
          ))}
      </div>
      <div className={styles.loadMoreButtonContainer}>
        <div
          className={styles.arrowsContainer}
          onClick={() => {
            loadProjects?.length === projects?.length
              ? handleLoadLess()
              : handleLoadMore();
          }}
        >
          {loadProjects?.length === projects?.length ? (
            <div
              className={styles.arrows}
              style={{ transform: "rotate(225deg)" }}
            ></div>
          ) : (
            <div
              className={styles.arrows}
              style={{ transform: "rotate(45deg)" }}
            ></div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
