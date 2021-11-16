import styles from "./HomePage.module.scss";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <div className={styles.container} id="home">
        <h1>
          Hello, <br /> I&apos;m Alex<span>.</span>
        </h1>

        <h3>A Full-Stack Web Developer</h3>

        <Link
          href="https://drive.google.com/file/d/1Xej3F-X7mPF354ypgvi0EnQ7upW7fCC0/view?usp=sharing, _blank"
          passHref
        >
          <a target="_blank" rel="noopener noreferrer">
            <button type="button">Resume</button>
          </a>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
