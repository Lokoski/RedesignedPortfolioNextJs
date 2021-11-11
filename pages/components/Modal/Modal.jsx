import styles from "./Modal.module.scss";
import Image from "next/image";
import Link from "next/link";
import useOnclickOutside from "react-cool-onclickoutside";

const Modal = ({ data, projectId, setOpenModal }) => {
  const filteredData = data && data.filter((data) => data.id === projectId)[0];

  const ref = useOnclickOutside(() => {
    setOpenModal(false);
  });

  return (
    <div className={styles.container}>
      {filteredData && (
        <div className={styles.modalCard} ref={ref}>
          <div className={styles.exitButton}>
            <button onClick={() => setOpenModal(false)}> x </button>
          </div>
          <div className={styles.imageContainer}>
            <Image src={filteredData.image} alt="image" />
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.title}>
              <h1>{filteredData.title}</h1>
            </div>
            <div className={styles.description}>
              <p>{filteredData.description}</p>
            </div>
            <div className={styles.buttons}>
              <Link href={filteredData.github} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <button>Github</button>
                </a>
              </Link>

              {filteredData.liveDemo && (
                <Link href={filteredData.liveDemo} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <button>Live Demo</button>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
