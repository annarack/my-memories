import styles from "./Polaroid.module.css";
import PolaroidLightImg from "../assets/images/polaroid.png";
import PolaroidDarkImg from "../assets/images/polaroid2.png";
import KlammerImg from "../assets/images/Klammer.png";
import { useState, useEffect } from "react";
import InfoPopup from "../InfoPopup/InfoPopup";

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

export default function Polaroid({ data }) {
  const [likes, setLikes] = useState(0);
  const [randomRotation, setRandomRotation] = useState(
    getRandomArbitrary(-20, 20)
  );
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    console.log("called useEffect");
    document.title = `Likes: ${likes}`;
  }, [likes]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     console.log("set rotation:" + data.id);
  //     setRandomRotation(getRandomArbitrary(-20, 20));
  //   }, 5000);
  //   return () => clearTimeout(timeout);
  // });

  const handlePolaroidClick = () => {
    setShowInfo(true);
  };

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <div className="hoverContainer">
        <div
          className={styles.container}
          style={{ transform: `rotateZ(${randomRotation}deg)` }}
        >
          <div style={{ position: "relative" }} onClick={handlePolaroidClick}>
            <img className={styles.photo} src={`/assets/${data.img}`} alt="" />
            <img
              className={styles.polaroidFrame}
              src={
                data.subtype === "light" ? PolaroidLightImg : PolaroidDarkImg
              }
              alt=""
            />
            <img
              className={styles.pin}
              src={KlammerImg}
              style={{
                transform: `rotateZ(${getRandomArbitrary(-20, 20)}deg)`,
              }}
              alt=""
            />
            <div
              style={{ color: data.subtype === "dark" && "white" }}
              className={styles.text}
            >
              {data.title}
            </div>
          </div>
          <button onClick={handleLikeClick} className={styles.likeButton}>
            Likes: {likes}
          </button>
        </div>
      </div>
      {showInfo && (
        <InfoPopup popupData={data} onCloseClick={() => setShowInfo(false)} />
      )}
    </>
  );
}
