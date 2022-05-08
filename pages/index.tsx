import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import {
  Button,
  Nav,
  Carousel,
  CarouselItem,
  CarouselProps,
} from "react-bootstrap";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HICO Storage</title>
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
        <h1 className={styles.title}>HICO Storage Co.</h1>

        <p className={styles.description}>Rugged. Reliable. Ready.</p>
        <div className={styles.grid}>
        <a href="/specs" className={styles.card}>
            <h2>Full Storage Unit</h2>
            <p>$150 per month</p>
            <Image
              src="/dimensioned.jpeg"
              alt="HICO full length Storage unit"
              width={400}
              height={250}
            />
            <div className="centered">
              <p>Units Available: {10}</p>
            </div>
          </a>

          <a href="/specs" className={styles.card}>
            <h2>Half Storage Unit</h2>
            <p>$100 per month</p>
            <Image
              src="/dimensioned.jpeg"
              alt="HICO half length Storage unit"
              width={400}
              height={250}
            />
            <div className="centered">
              <p>Units Available: {10}</p>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
