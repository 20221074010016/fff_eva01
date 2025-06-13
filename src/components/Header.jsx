import styles from "./Header.module.css";
import { AlarmClock } from "lucide-react";

export function Header() {
  return (
    <header className={styles.header1}>
      <AlarmClock />
      <h1>Foco, Força, Fé</h1>
    </header>
  );
}
