import ProjectCard from "../ProjectCard/ProjectCard";
import { useState } from "react";
import styles from "./Projects.module.scss";
import Modal from "../Modal/Modal";
import { PROJECTS } from "../../../data/projects";

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);

  const [projectId, setProjectId] = useState();

  return (
    <>
      <div className={styles.container} id="work">
        <h1>
          Work<span>.</span>
        </h1>
        <div className={styles.projectCard}>
          <ProjectCard
            projects={PROJECTS}
            openModal={openModal}
            setOpenModal={setOpenModal}
            setProjectId={setProjectId}
          />
        </div>
      </div>
      {openModal && (
        <Modal
          data={PROJECTS}
          projectId={projectId}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

// const clickOutsideConfig = {
//   handleClickOutside: () => Projects.handleClickOutside,
// };

// export default onClickOutside(Projects, clickOutsideConfig);
export default Projects;
