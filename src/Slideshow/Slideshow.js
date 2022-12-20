import { useState, useEffect } from "react";
import styles from "./Slideshow.module.css";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AnimatePresence, motion } from "framer-motion";

export default function Slideshow({ imageData }) {
  const [currentItemID, setCurrentItemID] = useState(0);

  useEffect(() => {
    console.log("init slideshow timeout");
    const timeout = setTimeout(() => {
      console.log("change item to " + ((currentItemID + 1) % imageData.length));
      setCurrentItemID((currentItemID + 1) % imageData.length);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentItemID, imageData.length]);

  // return (
  //   <div className={styles.container}>
  //     <img
  //       id={currentItemID}
  //       src={`./assets/${imageData[currentItemID].img}`}
  //     />
  //   </div>
  // );

  return (
    <div className={styles.container}>
      <AnimatePresence>
        <motion.img
          key={currentItemID}
          src={`./assets/${imageData[currentItemID].img}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>
    </div>
  );

  // fade style is defined in index.css to have it globally accessible
  // return (
  //   <TransitionGroup className={styles.container}>
  //     <CSSTransition
  //       key={currentItemID}
  //       timeout={crossFadeTimer}
  //       classNames="fade"
  //     >
  //       <img src={`./assets/${imageData[currentItemID].img}`} />
  //     </CSSTransition>
  //   </TransitionGroup>
  // );
}
