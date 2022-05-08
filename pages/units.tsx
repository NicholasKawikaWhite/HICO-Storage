import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Nav } from "react-bootstrap";

const Home: NextPage = () => {
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

      <main className={styles.main}>
        <p>
          For More Information or to Rent, Call{" "}
          <a href="tel:8088962272">808-896-2272</a>
        </p>
        <p>
          or Email:{" "}
          <a href="mailto: makaiinhawaii@gmail.com">makaiinhawaii@gmail.com</a>
        </p>
        <div className={styles.grid}>
          <a href="/specs" className={styles.card}>
            <h2>Basic Storage Unit</h2>
            <p>$200 per month</p>
            <Image
              src="/storage.webp"
              alt="fruita Storage Conatiner"
              width={550}
              height={300}
            />
            <div className="centered">
              <p>Units Available: {10}</p>
            </div>
          </a>

          <a href="/specs" className={styles.card}>
            <h2>Half Storage Unit</h2>
            <p>$75 per month</p>
            <Image
              src="/storage.webp"
              alt="HICO half length Storage unit"
              width={550}
              height={300}
            />
            <div className="centered">
              <p>Units Available: {1}</p>
            </div>
          </a>

          <a href="/specs" className={styles.card}>
            <h2>Insulated Storage</h2>
            <p>$600 per month</p>
            <Image
              src="/storage.webp"
              alt="fruita Storage insulated storage"
              width={550}
              height={300}
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
