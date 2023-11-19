import Link from "next/link";
import styles from "./menuLink.module.css";

function MenuLink({ items }) {
  return (
    <Link href={items.path} className={styles.container}>
      {items.icon}
      {items.title}
    </Link>
  );
}

export default MenuLink;
