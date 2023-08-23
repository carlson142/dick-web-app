"use client";

import styles from "./page.module.css";
import styled from "styled-components";

const Text = styled.h1`
  font-size: 50px;
`;

export default function Home() {
  return (
    <main className={styles.main}>
      <Text>TEST</Text>
    </main>
  );
}
