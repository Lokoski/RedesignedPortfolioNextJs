import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);
import logo from "../../../public/images/logo.png";

const Navbar = () => {
  const [openNavBar, setOpenNavBar] = useState(false);

  const ref = useOnclickOutside(() => {
    setOpenNavBar(false);
  });

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.buttonContainer}>
        <div
          onClick={() => setOpenNavBar(!openNavBar)}
          className={
            openNavBar
              ? `${styles.menuToggle} ${styles.clicked}`
              : styles.menuToggle
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {openNavBar && (
        <div className={styles.navContainer}>
          <div className={styles.logoContainer}>
            <Image
              src={logo}
              alt="Logo"
              height="20"
              width="60"
              className={styles.logo}
            />
          </div>
          <div
            className={styles.links}
            ref={ref}
            onClick={() => setOpenNavBar(false)}
          >
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="#about">
              <a>About</a>
            </Link>
            <Link href="#work">
              <a>Work</a>
            </Link>
            <Link href="#contact">
              <a>Contact</a>
            </Link>
          </div>
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
      )}
    </div>
  );
};

export default Navbar;
