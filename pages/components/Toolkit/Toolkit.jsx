import styles from "./Toolkit.module.scss";
import ToolkitIconCard from "../ToolkitIconCard/ToolkitIconCard";
import { FRONT_END_ICONS } from "../../../data/frontendicons";
import { BACK_END_ICONS } from "../../../data/backendicons";

const Toolkit = () => {
  return (
    <div className={styles.container}>
      <h1>
        TOOLKIT<span>.</span>
      </h1>
      <div className={styles.iconsContainer}>
        <div className={styles.icons}>
          <ToolkitIconCard data={FRONT_END_ICONS} />
        </div>
        <div className={styles.icons}>
          <ToolkitIconCard data={BACK_END_ICONS} />
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
