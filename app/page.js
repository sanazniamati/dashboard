/** @format */

import Link from "next/link";
import styles from "./home.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <h1>this project is dashboard chalenge</h1>
      <Link className={styles.dashboard_link} href={"/dashboard"}>
        go to dashboard
      </Link>
    </div>
  );
};

export default Homepage;
