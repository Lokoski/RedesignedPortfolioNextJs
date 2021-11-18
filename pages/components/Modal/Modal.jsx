import styles from "./Modal.module.scss";
import Image from "next/image";
import Link from "next/link";
import useOnclickOutside from "react-cool-onclickoutside";
import { useState } from "react";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);

const Modal = ({ data, projectId, setOpenModal }) => {
  const filteredData = data && data.filter((data) => data.id === projectId)[0];

  console.log(filteredData.image.map((image) => image));

  const ref = useOnclickOutside(() => {
    setOpenModal(false);
  });

  const images = filteredData.image.map((data, i) => data);

  const [index, setIndex] = useState(0);

  return (
    <div className={styles.container}>
      {filteredData && (
        <div className={styles.modalCard} ref={ref}>
          <div className={styles.exitButton}>
            <button onClick={() => setOpenModal(false)}> x </button>
          </div>
          <div className={styles.carouselContainer}>
            <div className={styles.buttonContainer}>
              <button
                onClick={() => setIndex(index === 0 ? 0 : index - 1)}
                className={styles.carouselButton}
              >
                <FontAwesomeIcon
                  className={styles.arrow}
                  icon={["fa", "chevron-left"]}
                />
              </button>
            </div>
            <div className={styles.imageContainer}>
              <Image src={images[index]} alt="image" />
            </div>

            <div className={styles.buttonContainer}>
              <button
                onClick={() =>
                  setIndex(
                    index === images.length - 1 ? images.length - 1 : index + 1
                  )
                }
                className={styles.carouselButton}
              >
                <FontAwesomeIcon
                  className={styles.arrow}
                  icon={["fa", "chevron-right"]}
                />
              </button>
            </div>
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
