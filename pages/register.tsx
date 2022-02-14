import React, { useEffect, useState } from "react";
import axios from "axios";
import API_USERS from "../api/urls";
import HEADERS from "../utils/constants";
import styles from "../styles/Register.module.css";

interface RegisterInitialState {
  username: String;
  fName: String;
  lName: String;
  password: String;
  email: String;
  age: Number;
}

interface ErrorMessage {
  value: any;
}

export default function register() {
  const initialState: RegisterInitialState = {
    username: "",
    fName: "",
    lName: "",
    password: "",
    email: "",
    age: 0,
  };

  const errorValue: ErrorMessage = false;

  const [newUser, setNewUser] = useState<RegisterInitialState>(initialState);
  const [errorMsg, setErrorMsg] = useState<ErrorMessage>(errorValue);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const registerHandler = async () => {
    setLoading(true);
    setErrorMsg(false);
    setSuccess(false);
    Object.values(newUser).forEach((j) => {
      if (j === "" || j === 0) return;
    });
    if (newUser.age > 115) {
      setErrorMsg("Age is too high");
      setLoading(false);
      return;
    }
    try {
      console.log(API_USERS);
      await axios.post(API_USERS, { data: newUser }, HEADERS);
      setSuccess(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrorMsg("Error saving user");
    }
  };

  const loginHandler = () => (window.location.href = "/login");

  return (
    <div id={styles.registerWrapper}>
      <section id={styles.registerSection}>
        <h3 id={styles.registerTitle}>Register</h3>
        <div className={styles.registerSectionRow}>
          <div className={styles.registerSectionRowLeft}>Username: </div>
          <div className={styles.registerSectionRowRight}>
            <input
              className={styles.registerInput}
              value={newUser.username}
              type="text"
              maxLength={30}
              required
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.target.value })
              }
            />
          </div>
        </div>
        <div className={styles.registerSectionRow}>
          <div className={styles.registerSectionRowLeft}>First Name: </div>
          <div className={styles.registerSectionRowRight}>
            <input
              className={styles.registerInput}
              value={newUser.fName}
              type="text"
              maxLength={30}
              required
              onChange={(e) =>
                setNewUser({ ...newUser, fName: e.target.value })
              }
            />
          </div>
        </div>
        <div className={styles.registerSectionRow}>
          <div className={styles.registerSectionRowLeft}>Last Name: </div>
          <div className={styles.registerSectionRowRight}>
            <input
              className={styles.registerInput}
              value={newUser.lName}
              type="text"
              maxLength={30}
              required
              onChange={(e) =>
                setNewUser({ ...newUser, lName: e.target.value })
              }
            />
          </div>
        </div>
        <div className={styles.registerSectionRow}>
          <div className={styles.registerSectionRowLeft}>Password: </div>
          <div className={styles.registerSectionRowRight}>
            <input
              className={styles.registerInput}
              value={newUser.password}
              type="password"
              maxLength={255}
              required
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
          </div>
        </div>
        <div className={styles.registerSectionRow}>
          <div className={styles.registerSectionRowLeft}>Email: </div>
          <div className={styles.registerSectionRowRight}>
            <input
              className={styles.registerInput}
              value={newUser.email}
              type="text"
              maxLength={100}
              required
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className={styles.registerSectionRow}>
          <div className={styles.registerSectionRowLeft}>Age: </div>
          <div className={styles.registerSectionRowRight}>
            <input
              className={styles.registerInput}
              value={newUser.age}
              type="number"
              maxLength="3"
              required
              onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
            />
          </div>
        </div>
        <div
          className={styles.registerSectionRow}
          id={styles.registerButtonRow}
        >
          <button
            className={styles.registerButton}
            id={styles.registerButtonLogin}
            onClick={(e) => loginHandler(e.target.value)}
          >
            Login
          </button>
          <button
            className={styles.registerButton}
            id={styles.registerButtonRegister}
            onClick={(e) => registerHandler(e.target.value)}
          >
            Register
          </button>
        </div>
        <div className={styles.registerSectionErrorRow}>
          {errorMsg ? (
            <span id={styles.registerErrorText}>{errorMsg}</span>
          ) : (
            ""
          )}
          {loading ? (
            <span id={styles.registerLoadingText}>Loading...</span>
          ) : (
            ""
          )}
          {success ? (
            <span id={styles.registerSuccessText}>
              Successfully created new user!
            </span>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}
