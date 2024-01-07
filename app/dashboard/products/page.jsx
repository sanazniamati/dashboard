import Link from "next/link";
import Image from "next/image";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pageination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProducts } from "../../lib/data";

async function ProductsPage({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);

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
            <td>CreatedAt </td>
            <td>Stoke</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    className={styles.productImage}
                    src={product.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>{product.price}</td>
              <td>{product.createAt?.toString().splice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/&{product.id}`}>
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
          ))}
        </tbody>
      </table>
      <Pageination count={count} />
    </div>
  );
}

export default ProductsPage;
