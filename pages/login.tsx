import React, { useState } from "react";

import styles from "../styles/Login.module.css";
import dashboard from "./dashboard";

const testLogins = {
  username: "test",
  password: "test",
};

export default function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginHandler = (e) => {
    if (username === "" || password === "") return;
    // fetch request for login
    e.preventDefault();
    setErrorMsg(false);
    setLoading(true);
    if (username === testLogins.username && password === testLogins.password) {
      let temp = testLogins;
      delete temp.password;
      localStorage.setItem("yaelsurance", JSON.stringify(temp));
      window.location.href = "/dashboard";
      return;
    } else {
      setLoading(false);
      setErrorMsg("Invalid login!");
      return;
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();
    window.location.href = "/register";
  };

  return (
    <div id={styles.loginWrapper}>
      <section id={styles.loginSection}>
        <h3 id={styles.loginTitle}>Login</h3>
        {/* <form > */}
        <div className={styles.loginSectionRows}>
          <div className={styles.loginSectionRowsLeft}>Username: </div>
          <div className={styles.loginSectionRowsRight}>
            <input
              type="text"
              className={styles.loginInput}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
        </div>
        <div className={styles.loginSectionRows}>
          <div className={styles.loginSectionRowsLeft}>Password: </div>
          <div className={styles.loginSectionRowsRight}>
            <input
              type="password"
              className={styles.loginInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        </div>
        <div
          id={styles.loginSectionButtonRow}
          className={styles.loginSectionRows}
        >
          <button
            id={styles.loginButtonRegister}
            className={styles.loginButton}
            onClick={(e) => registerHandler(e)}
          >
            Register
          </button>
          <button
            id={styles.loginButtonLogin}
            className={styles.loginButton}
            onClick={(e) => loginHandler(e)}
          >
            Login
          </button>
        </div>
        <div className={styles.loginSectionErrorRow}>
          {errorMsg ? <span id={styles.loginErrorText}>{errorMsg}</span> : ""}
          {loading ? <span id={styles.loginLoadingText}>Loading...</span> : ""}
        </div>
        {/* </form> */}
      </section>
    </div>
  );
}
