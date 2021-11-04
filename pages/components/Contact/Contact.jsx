import styles from "./ContactMe.module.scss";
import ContactForm from "../ContactForm/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas,fab);

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div>
          <h1>
            Let&apos;s Work <br /> together<span>.</span>
          </h1>
        </div>
        <div className={styles.socialIconsContainer}>
          <div className={styles.socialIconsFile}>
            <FontAwesomeIcon
              className={styles.fileIcon}
              icon={["fas", "file-alt"]}
            />
          </div>
          <div className={styles.socialIcons}>
            <FontAwesomeIcon
              className={styles.icons}
              icon={["fab", "linkedin"]}
            />
          </div>
          <div className={styles.socialIcons}>
            <FontAwesomeIcon
              className={styles.icons}
              icon={["fab", "github"]}
            />
          </div>
          <div className={styles.socialIcons}>
            <FontAwesomeIcon
              className={styles.icons}
              icon={["fab", "twitter"]}
            />
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
