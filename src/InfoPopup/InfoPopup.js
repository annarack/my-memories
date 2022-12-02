import styles from "./InfoPopup.module.css";

export default function InfoPopup({ popupData, onCloseClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h3>{popupData.title}</h3>
        <p>{popupData.info}</p>
        <button onClick={onCloseClick}>Close</button>
      </div>
    </div>
  );
}
