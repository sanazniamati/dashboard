import Card from "../ui/card/card";
import Tranaction from "../ui/transactions/transactions";
import Chart from "../ui/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/rightbar/rightbar";
function Dshboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Tranaction />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
}

export default Dshboard;
