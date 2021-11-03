import styles from "./HomePage.module.scss"


const handleClick = () => {
    console.log("Clicked")
}

const HomePage = () => {
    return (
        <div className={styles.container}>
                <h1>Hello, <br /> I&apos;m Alex<span>.</span></h1>
                <h3>A Full-Stack Web Developer</h3>
                <button onClick={() => handleClick()} type="buttons">Resume</button>
        </div>
    )
}

export default HomePage
