import styles from "./Main.module.css";
import { Card } from "./Card";

const cards = [0, 1, 2, 3, 4];
const randomNumbers = cards.map(() => Math.floor(Math.random() * 1000));

export function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {cards.map((i) => (
          <Card key={i} imageId={randomNumbers[i]} title={`My Text ${i}`} />
        ))}
      </div>
    </main>
  );
}
