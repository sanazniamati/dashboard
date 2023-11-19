import styles from "./pageination.module.css";

function Pageination(props) {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>
        Previous
      </button>
      <button className={styles.button}>Next</button>
    </div>
  );
}

export default Pageination;
