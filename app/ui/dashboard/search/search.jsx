"use client";
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";

function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  // console.log(searchParams);
  // console.log(pathName);

  const handleSearch = useDebounce((e) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }

    replace(`${pathName}?${params}`);
  }, 300);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
