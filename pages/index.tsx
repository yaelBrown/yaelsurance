import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import IndexImg from '../assets/img/homeImg.png'
import IndexImg2 from '../assets/img/homeImg2.png'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <section id={styles.jumbotron}>
        <div id={styles.jumbotronLeft}>
          <h1>Need protection that you can trust? </h1>
        </div>
        <div id={styles.jumbotronRight}>
          <Image src={IndexImg} alt="" />
        </div>
      </section>
      
      <hr/>
      
      <section id={styles.cta}>
        <h3>Get Insurance Today!</h3>
        <button>I want Insurance!</button>
      </section>

      <hr/>

      <section id={styles.desc}>
        <Image src={IndexImg2} alt="" width={400} height={300} layout={'fixed'} />
        <h3>Incidental Insurance for anything!</h3>
      </section>
    </div>
  )
}

export default Home
