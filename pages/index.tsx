import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import {Button, Nav} from 'react-bootstrap';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HICO Storage</title>
        <meta name="Fruita Storage" content="Storage Services Fruita Colorado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      ></Script>

      <main className={styles.main}>
        <h1 className={styles.title}>
        HICO Storage Co.
        </h1>

        <p className={styles.description}>
        Rugged. Reliable. Ready.
        </p>
        <table className={styles.productTable}>
          <th>
          <tr>hello</tr>
          <tr>whats app</tr>
          </th>
          <th>
            <tr>Lets go</tr>
          </th>
        </table>
        <Button className={styles.rentNow}href="/units">Get Storage Now!</Button>
        <p>Conviniently located in downtown Grand Junction, HICO Storage is here to meet your storage needs.</p>
       
      </main>

    </div>
  )
}

export default Home
