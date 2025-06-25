import styles from "./LuckyNumber.module.css";
import { useState } from "react";

export function LuckyNumber() {
    
    
    const [luckynumber, setLuckyNumber] = useState(0);

    function handleClick(){
        setLuckyNumber(Math.ceil(Math.random()*31));
    }

    return (
        <div className={styles.container}>
            <h1>Contador = {luckynumber}</h1>
            <button className={styles.button} onClick={handleClick}>Clique!</button>
        </div>
  );
}