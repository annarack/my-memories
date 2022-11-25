import styles from "./Polaroid.module.css";
import PolaroidLightImg from "../assets/images/polaroid.png";
import PolaroidDarkImg from "../assets/images/polaroid2.png";
import KlammerImg from "../assets/images/Klammer.png";

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

export default function Polaroid({ data }) {
  const handlePolaroidClick = () => {
    alert(data.info);
  };

  return (
    <div className="hoverContainer">
      <div
        onClick={handlePolaroidClick}
        className={styles.container}
        style={{ transform: `rotateZ(${getRandomArbitrary(-20, 20)}deg)` }}
      >
        <img className={styles.photo} src={`/assets/${data.img}`} alt="" />
        <img
          className={styles.polaroidFrame}
          src={data.subtype === "light" ? PolaroidLightImg : PolaroidDarkImg}
          alt=""
        />
        <img
          className={styles.pin}
          src={KlammerImg}
          style={{ transform: `rotateZ(${getRandomArbitrary(-20, 20)}deg)` }}
          alt=""
        />
        <div
          style={{ color: data.subtype === "dark" && "white" }}
          className={styles.text}
        >
          {data.title}
        </div>
      </div>
    </div>
  );
}
