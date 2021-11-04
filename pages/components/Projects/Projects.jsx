import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";
import {PROJECTS} from '../../../data/projects'

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1>
        Work<span>.</span>
      </h1>
         <ProjectCard projects={PROJECTS} />        
    </div>
  );
};

export default Projects;
