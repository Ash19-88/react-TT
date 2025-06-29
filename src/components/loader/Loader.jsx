import styles from "../loader/Loader.module.css";

export default function Loader({ text = "Cargando..." }) {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <span className={styles.loaderText}>{text}</span>
    </div>
  );
}