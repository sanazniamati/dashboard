import Link from "next/link";
import Image from "next/image";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pageination from "@/app/ui/dashboard/pagination/pagination";

function ProductsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"search for a product... "} />
        <Link href={"/dashboard/products/add"}>
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created </td>
            <td>Stoke</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  className={styles.productImage}
                  src={"/noproduct.jpg"}
                  alt=""
                  width={40}
                  height={40}
                />
                Iphone
              </div>
            </td>
            <td>Des</td>
            <td>$999</td>
            <td>13.01.2022</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link href={"/dashboard/products/test"}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pageination />
    </div>
  );
}

export default ProductsPage;
