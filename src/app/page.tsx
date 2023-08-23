"use client";

import CustomInput from "./components/CustomInput/CustomInput";
import Header from "./components/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <CustomInput />
    </main>
  );
}
