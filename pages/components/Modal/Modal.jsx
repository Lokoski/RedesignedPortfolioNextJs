import styles from "./Modal.module.scss";
import Image from "next/image";

const Modal = ({ data, projectId, setOpenModal }) => {
  const filteredData = data && data.filter((data) => data.id === projectId)[0];

  return (
    <div className={styles.container}>
      {filteredData && (
        <div className={styles.modalCard}>
          <div className={styles.exitButton}>
            <button onClick={() => setOpenModal(false)}> x </button>
          </div>
          <div className={styles.imageContainer}>
            <Image src={filteredData.image} alt="" />
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.title}>
              <h1>{filteredData.title}</h1>
            </div>
            <div className={styles.description}>
              <p>{filteredData.description}</p>
            </div>
            <div className={styles.buttons}>
              <button>Github</button>

              {filteredData.liveDemo && <button>Live Demo</button>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
