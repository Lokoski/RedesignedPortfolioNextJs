import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link"

const Navbar = () => {
  return (
    <div className={styles.scrollbarContainer}>
      <div className={styles.bar}>
        <input
          className={styles.barInput}
          type="radio"
          name="input"
          id="input_0"
        />
        <div className={styles.barView}>
          <label className={styles.barButton} htmlFor="input_0">
          <Link href="/">
            Contact
            </Link>
          </label>
        </div>
        <input
          className={styles.barInput}
          type="radio"
          name="input"
          id="input_1"
        />
        <div className={styles.barView}>
          <label className={styles.barButton} htmlFor="input_1"></label>
        </div>
        <input
          className={styles.barInput}
          type="radio"
          name="input"
          id="input_2"
        />
        <div className={styles.barView}>
          <label className={styles.barButton} htmlFor="input_2"></label>
        </div>
        <input
          className={styles.barInput}
          type="radio"
          name="input"
          id="input_3"
        />
        <div className={styles.barView}>
          <label className={styles.barButton} htmlFor="input_3"></label>
        </div>
        <input
          className={styles.barInput}
          type="radio"
          name="input"
          id="input_4"
        />
        <div className={styles.barView}>
          <label className={styles.barButton} htmlFor="input_4"></label>
        </div>
      </div>
      <div className="command">click on any one of the options</div>
    </div>
  );
};

export default Navbar;
