import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from "next/script"
import styles from '../styles/Specs.module.css'
import {Button, Nav} from 'react-bootstrap'

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
      <figure>
              <model-viewer
                style={{ width: "380px", height: "550px" }}
                loading="eager"
                auto-rotate-delay="1000"
                camera-orbit="0 80deg 0"
                interaction-prompt="none"
                rotation-per-second="200%"
                camera-controls
                environment-image="neutral"
                disable-zoom
                shadow-intensity="0.6"
                src="../blockO.glb"
              ></model-viewer>
            </figure>
          <div className={styles.grid}>

<div className={styles.card}>
    <h1>Storage Unit Specifications</h1>
    <ul>
    <li><p>Dimentions: <ul><li>Length: 20ft</li> <li>Width: 8ft</li> <li>Height: 8ft</li></ul></p></li>
    <li><p>Volume: 1280 cubic feet</p></li>
    <li><p>Air Conditioned: No</p></li>
    <li><p>Floor-Material: Wood</p></li>
    <li><p>Exterior Color: Tan</p></li>
    <li><p>Floor: Wood</p></li>
    </ul>



        </div>
        </div>
      </main>

    </div>
  )
}

export default Home
