import styles from "./MainMenu.module.css";
import Button from "../Button/Button.js";
import { useState } from "react";
import { motion } from "framer-motion";

// https://hamburger-react.netlify.app/
import { Squash as Hamburger } from "hamburger-react";

export default function MainMenu(props) {
  const [open, setOpen] = useState(false);

  const handleClick = (page) => {
    props.pageHandler(page);
    setOpen(false);
  };

  const variants = {
    open: { x: 0 },
    closed: { x: "-80%" },
  };

  return (
    <motion.div
      key="menuContainer"
      animate={open ? "open" : "closed"}
      transition={{ duration: 0.5, type: "tween" }}
      variants={variants}
      className={styles.container}
    >
      <div className={styles.menuContainer}>
        <h4>Memories-Gallery</h4>
        <Button
          isSelected={props.currentPage === "pinboard"}
          onClickHandler={() => handleClick("pinboard")}
        >
          Pinboard
        </Button>
        <Button
          isSelected={props.currentPage === "slideshow"}
          onClickHandler={() => handleClick("slideshow")}
        >
          Slideshow
        </Button>
      </div>
      <Hamburger
        toggled={open}
        toggle={setOpen}
        color="white"
        size={25}
        label="Menu"
        rounded
      />
    </motion.div>
  );
}
