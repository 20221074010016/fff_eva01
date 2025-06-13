import styles from "./Card.module.css";

export function Card({ imageId, title }) {
  return (
    <div className={styles.card}>
      <img src={`https://picsum.photos/200/300?random=${imageId}`} alt={title} />
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </p>
    </div>
  );
}
