import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <div className={styles.container}>
            <p>ALEX LOKOSKI &copy; 
          {new Date().getFullYear()}&nbsp;</p>
        </div>
    )
}

export default Footer
