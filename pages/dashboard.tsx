import React, { useEffect, useState } from "react";

import styles from "../styles/Dashboard.module.css";

export default function dashboard() {
  const [userContext, setUserContext] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("yaelsurance"));
    if (user === null) return (window.location.href = "/login");
    setUserContext(user);
  }, []);

  return (
    <div id={styles.dashboardWrapper}>
      <section>
        <h2>Hello {userContext.username ? userContext.username : "there"}</h2>
      </section>
    </div>
  );
}
