import styles from "./PaperNote.module.css";
import PaperNoteImg from "../assets/images/paperBG.png";
import PinImg from "../assets/images/pin.png";

export default function PaperNote({ data }) {
  return (
    <div className={`hoverContainer ${styles.container}`}>
      <img className={styles.pin} src={PinImg} alt="pin" />
      <img className={styles.backgroundImg} src={PaperNoteImg} alt="bg" />
      <div className={styles.textBox}>
        <h3>{data.note}</h3>
      </div>
    </div>
  );
}
