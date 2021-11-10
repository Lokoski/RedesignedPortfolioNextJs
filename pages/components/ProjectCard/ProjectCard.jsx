import styles from "./ProjectCard.module.scss";
import Image from "next/image";

const ProjectCard = ({ projects, setOpenModal, openModal, setProjectId }) => {
  return (
    <div className={styles.container}>
      {projects &&
        projects.map((project, i) => (
          <div key={project.id} className={styles.contentContainer}>
            <div className={styles.cardWrapper}>
              <div className={styles.cardContainer}>
                <Image
                  src={project.image}
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
                    See More
                  </button>
                </div>
              </div>
            </div>
            <h3 className={styles.cardName}>{project.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default ProjectCard;
