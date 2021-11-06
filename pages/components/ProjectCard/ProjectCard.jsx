import styles from "./ProjectCard.module.scss";
import Image from "next/image";

const ProjectCard = ({ projects, setOpenModal, openModal, setProjectId }) => {
  return (
    <div className={styles.container}>
      {projects && projects.map((project) => (
        <div key={project.id}>
          <div className={styles.cardContainer}>
            <Image src={project.image} alt="" layout="fill" className={styles.cardImage} />
          </div>
            <h3 className={styles.cardName}>{project.title}</h3>
            <button
              onClick={() => {
                setOpenModal(!openModal);
                setProjectId(project.id);
              }}
            >
              See More
            </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
