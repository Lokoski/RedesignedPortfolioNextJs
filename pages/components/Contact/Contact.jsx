import styles from "./Contact.module.scss";
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
              icon={["fa", "file-alt"]}
            />
          </div>
          <div className={styles.socialIconsLinkedIn}>
            <FontAwesomeIcon
              className={styles.linkedInIcon}
              icon={["fab", "linkedin-in"]}
            />
          </div>
          <div className={styles.socialIconsGithub}>
            <FontAwesomeIcon
              className={styles.githubIcon}
              icon={["fab", "github"]}
            />
          </div>
          <div className={styles.socialIconsTwitter}>
            <FontAwesomeIcon
              className={styles.twitterIcon}
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
