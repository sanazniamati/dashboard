import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";

function Search({ placeholder }) {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input className={styles.input} type="text" placeholder={placeholder} />
    </div>
  );
}

export default Search;
