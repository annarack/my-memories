import styles from "./Pinboard.module.css";
import Polaroid from "../Polaroid/Polaroid.js";
import PaperNote from "../PaperNote/PaperNote.js";
import { v4 as uuidv4 } from "uuid";
//the uuid module comes default with create-react-app

export default function Pinboard({ data }) {
  return (
    <div className={styles.background}>
      <div className={styles.headline}>My memories</div>
      <div className={styles.container}>
        {data.map((item) =>
          item.type === "polaroid" ? (
            <Polaroid data={item} key={uuidv4()} />
          ) : (
            <PaperNote data={item} key={uuidv4()} />
          )
        )}
      </div>
    </div>
  );
}
