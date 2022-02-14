import React from "react";
import Link from "next/link";

import styles from "../styles/Footer.module.css";

const footerLinks = {
  Home: "/",
  Login: "/login",
  Register: "/register",
  Logout: "/logout",
};

export default function footer() {
  return (
    <footer id={styles.footer}>
      <section id={styles.footerTop} className={styles.footerSection} />

      <section id={styles.footerMiddle} className={styles.footerSection} />

      <section id={styles.footerBottom} className={styles.footerSection}>
        <div id={styles.footerBottomLeft}>
          <ul>
            {Object.keys(footerLinks).map((e, i) => {
              return (
                <Link key={i} href={footerLinks[e]}>
                  <a>
                    <li key={i}>{e}</li>
                  </a>
                </Link>
              );
            })}
          </ul>
        </div>
        <div id={styles.footerBottomRight}>
          <Link href="https://github.com/yaelBrown/yaelsurance">
            <a>
              <h4>Yaelsurance</h4>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/yaelrbrown/">
            <a>
              <p>Created by Yael</p>
            </a>
          </Link>
        </div>
      </section>
    </footer>
  );
}
