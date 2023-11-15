import styles from "./history.module.css";

export default function History({ moves, jumpTo }) {
  return (
    <ul className={styles.history}>
      {moves.map((move) => (
        <li key={move.id} className={styles.move}>
          <button onClick={() => jumpTo(move)}> </button>
        </li>
      ))}
    </ul>
  );
}
