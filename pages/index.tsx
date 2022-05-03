import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button, Nav} from 'react-bootstrap';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fruita Storage Co.</title>
        <meta name="Fruita Storage" content="Storage Services Fruita Colorado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Fruita Storage Co.
        </h1>

        <p className={styles.description}>
        Rugged. Reliable. Ready.
        </p>
        <p>Conviniently located in downtown Grand Junction, Fruita Storage is here to meet your storage needs.</p>
       
      </main>

    </div>
  )
}

export default Home
