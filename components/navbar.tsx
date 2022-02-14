import React from "react";
import Link from "next/link";

import { BsFillPersonFill } from "react-icons/bs";

import styles from "../styles/Navbar.module.css";

export default function navbar() {
  return (
    <nav id={styles.nav}>
      <section id={styles.navLeft}>
        <Link href="/">
          <a>
            <h3>YaelSurance</h3>
          </a>
        </Link>
      </section>

      <section id={styles.navMiddle}></section>

      <section id={styles.navRight}>
        <Link href="/login">
          <a>
            <h3>Login</h3>
          </a>
        </Link>
        <BsFillPersonFill id={styles.navRightIcon} size="1.5em" />
      </section>
    </nav>
  );
}
