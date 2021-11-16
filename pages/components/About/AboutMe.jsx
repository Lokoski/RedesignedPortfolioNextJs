import styles from "./AboutMe.module.scss";
import Img from "next/image";
import profileImage from "../../../public/images/profileImage.jpeg";

const AboutMe = () => {
  return (
    <div className={styles.container} id="about">
      <h1>
        About Me<span>.</span>
      </h1>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Img src={profileImage} layout="fill" className={styles.image} />
        </div>
        <div className={styles.paragraph}>
          <p>
            Hi, my name is Aleksandar Lokoski and I’m a full stack developer! I
            was first introduced to coding while trying to create a website for
            my fitness business and I haven&apos;t looked back since. I&apos;m a
            curious, driven team player, who is always looking to improve. As a
            web developer, I have experience working with JavaScript, ReactJS,
            Redux, HTML, CSS, Sass and Bootstrap for the front end, and React
            Native for mobile developer. I&apos;m also comfortable with NodeJS,
            Express and MongoDB for back end development.
          </p>

          <p>
            Outside of coding, I’m that annoying friend that’s always looking to
            do something new. I also have my own fitness business and am very
            passionate about helping people to achieve their fitness goals and
            live their best life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
