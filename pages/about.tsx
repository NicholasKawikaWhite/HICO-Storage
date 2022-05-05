import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import {Button, Nav} from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HICO Storage</title>
        <meta name="Fruita Storage" content="Storage Services Fruita Colorado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.picture}>
            <Image src="/canyon-storage.png" width={200} height={500}/>
        </div>
      </main>

    </div>
  )
}

export default Home
