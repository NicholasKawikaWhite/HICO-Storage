import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Specs.module.css";
import { Button, Nav } from "react-bootstrap";

const Specs: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fruita Storage Co.</title>
        <meta
          name="Fruita Storage"
          content="Storage Services Fruita Colorado"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      ></Script>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
          <figure>
              <model-viewer
                style={{ width: "500px", height: "500px" }}
                loading="eager"
                auto-rotate-delay="1000"
                camera-orbit="60deg 80deg 0"
                interaction-prompt="none"
                rotation-per-second="200%"
                camera-controls
                environment-image="neutral"
                disable-zoom
                bounds="tight"
                ar-scale="auto"
                shadow-intensity="0.6"
                src="../colorized.glb"
              ></model-viewer>
            </figure>
          </div>
        
          <div className={styles.card}>
            <h1>Storage Unit Specifications</h1>
            <ul>
              <li>Dimensions:</li>
              <li>Lenght: 20ft</li><li>Height: 8ft</li><li>Width: 8ft</li>
              <li>Floor-Material: Hardwood</li>
              <li>Interior: Painted</li>
              <li>Security: 5-lock-points</li>
              <li>Air-Conitioning: None</li>
            </ul>
            <div className="centered">
            <Button href="/contact">
              Rent Now
            </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Specs;
