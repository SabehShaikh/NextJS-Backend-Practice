"use client"

import styles from "./style.module.css"


// import { useRouter } from "next/navigation";
const Shop = (props) => {
  console.log(props)
  // const router = useRouter();
  // const { category } = params;
  return (
    <div>
      <h1 className={styles.heading}>Shop Page</h1>
    <h3>category</h3>
    </div>
  );
};

export default Shop;
