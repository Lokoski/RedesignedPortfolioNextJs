import styles from "./Modal.module.scss";
import Image from "next/image";

const Modal = ({ data, projectId, setOpenModal }) => {
  const filteredData = data.filter((data) => data.id === projectId)[0];

  const { title, image, description } = filteredData;

  console.log(title);

  return (
    <div className={styles.container}>
      <div className={styles.modalCard}>
        <div className={styles.exitButton}>
          <button onClick={() => setOpenModal(false)}> x </button>
        </div>
        <div className={styles.imageContainer}>
          <Image src={image} alt="" />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
          <div className={styles.buttons}>
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
