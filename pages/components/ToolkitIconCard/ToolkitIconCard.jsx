import styles from "./ToolkitIconCard.module.scss";
import Image from "next/image";

const ToolkitIconCard = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((icon) => (
        <div key={icon.id} className={styles.contentContainer}>
          <div className={styles.image}>
            <Image src={icon.image} alt="icon" layout="fill" />
          </div>
          <p className={styles.text}>{icon.descriptions}</p>
        </div>
      ))}
    </div>
  );
};

export default ToolkitIconCard;
