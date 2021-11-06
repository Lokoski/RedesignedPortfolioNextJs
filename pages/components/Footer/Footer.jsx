import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>
        ALEX LOKOSKI &copy;
        {new Date().getFullYear()}&nbsp;
      </p>

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
  );
};

export default Footer;
