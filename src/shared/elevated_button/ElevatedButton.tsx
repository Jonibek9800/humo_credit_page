"use client"
import { MouseEventHandler } from "react";
import styles from "./elevated_button.module.css";

const ElevatedButton = ({
  title,
  onClick,
  classes,
  ...attrs
  
}: {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  classes: string
}) => {
  return (
    <button {...attrs} onClick={onClick} className={`${styles.elevated_button} ${classes}`}>
      {title}
    </button>
  );
};

export default ElevatedButton;
