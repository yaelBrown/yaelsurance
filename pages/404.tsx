import React from "react";
import Image from "next/image";

import errorImg from "../assets/img/errorImage.png";

import styles from "../styles/404.module.css";

export default function Custom404() {
  return (
    <div id={styles.error}>
      <Image src={errorImg} width={400} height={300} alt="" />
      <h1 id={styles.errorText}>Error: 404</h1>
    </div>
  );
}
