import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";

const ProjectCard = ({ projects, setOpenModal, openModal, setProjectId }) => {
  const [loadProjects, setLoadProjects] = useState();
  const [index, setIndex] = useState(4);

  useEffect(() => {
    setLoadProjects(projects.slice(0, index));
  }, [projects]);

  const handleLoadMore = () => {
    setLoadProjects(projects.slice(0, index + 4));
    setIndex(loadProjects.length + 4);
  };

  const handleLoadLess = () => {
    setIndex(loadProjects.length - 4);
    setLoadProjects(projects.slice(0, 4));
  };

  console.log(index, "dasdas", loadProjects?.length);

  return (
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
      <div className={styles.loadMoreButtonContainer}>
        <button
          onClick={() => {
            loadProjects?.length === projects.length
              ? handleLoadLess()
              : handleLoadMore();
          }}
          style={{ width: "200px", height: "50px" }}
        >
          {loadProjects?.length === projects.length ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
