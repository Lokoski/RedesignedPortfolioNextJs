import styles from "./Footer.module.scss";
import Link from "next/link";
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
          <Link
            passHref
            href="https://drive.google.com/file/d/1Xej3F-X7mPF354ypgvi0EnQ7upW7fCC0/view?usp=sharing"
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.fileIcon}
                icon={["fa", "file-alt"]}
              />
            </a>
          </Link>
        </div>
        <div className={styles.socialIconsLinkedIn}>
          <Link passHref href="https://www.linkedin.com/in/alexlokoski/">
            <a
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.linkedInIcon}
                icon={["fab", "linkedin-in"]}
              />
            </a>
          </Link>
        </div>
        <div className={styles.socialIconsGithub}>
          <Link passHref href="https://github.com/Lokoski">
            <a
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.githubIcon}
                icon={["fab", "github"]}
              />
            </a>
          </Link>
        </div>
        <div className={styles.socialIconsTwitter}>
          <Link passHref href="https://twitter.com/alexlokoski">
            <a
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className={styles.twitterIcon}
                icon={["fab", "twitter"]}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
