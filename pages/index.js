import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import HomePage from "./components/HomePage/HomePage"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import About from "./components/About/AboutMe"
import Toolkit from "./components/Toolkit/Toolkit"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Lokoski</title>
        <meta name="description" content="Aleksandar Lokoski's personal website " />
        <link rel="icon" href="" />
      </Head>
    <HomePage />
    <Projects />
    <About />
    <Toolkit />
    <Contact />
    </div>
  )
}
