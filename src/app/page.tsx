"use client";

import DataComponent from "./components/DataComponent/DataComponent";
import CustomInput from "./components/CustomInput/CustomInput";
import Header from "./components/Header/Header";
import styles from "./page.module.css";
import { useGetData } from "./zustand/store";

export default function Home() {
  const data = useGetData((store) => store.data);

  return (
    <main className={styles.main}>
      <Header />
      <CustomInput />
      {data.length > 0 && <DataComponent data={data} />}
    </main>
  );
}
