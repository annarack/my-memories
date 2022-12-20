import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <div
      className={`${styles.container} ${props.isSelected && styles.selected}`}
      onClick={props.onClickHandler}
    >
      {props.children}
    </div>
  );
}
