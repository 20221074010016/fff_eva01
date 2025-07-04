import { useState } from "react";
import styles from "./Product_list.module.css";


export function Product_list() {
    var category = "smartphones"
    var limit = 10
    var apiUrl =   `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,brand,title,price,description`;

    const [products,setProdcts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    return (
    <div>
        <h1>TJA Megastores</h1>
        {products.map((products)=>(
            <div key={product.id} className={styles.productCard}>
        ))}
    </div>  
    );
  }
  