import styles from "./ToolkitIconCard.module.scss";
import Image from "next/image";

const ToolkitIconCard = ({ icons }) => {
  return (
    <div className={styles.container}>
      {icons.map((icon) => (
        <div key={icon.id} className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <Image src={icon.image} alt="icon" height="50" width="50" />
          </div>
          <p className={styles.text}>{icon.descriptions}</p>
        </div>
      ))}
    </div>
  );
};

export default ToolkitIconCard;
