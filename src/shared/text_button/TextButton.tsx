"use client";
import { MouseEventHandler } from "react";
import styles from "./text_button.module.css";

const TextButton = ({
  title,
  onClick,
  classes,
  ...attrs
}: {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  classes: string;
}) => {
  return (
    <button
      {...attrs}
      onClick={onClick}
      className={`${styles.text_button} ${classes}`}
    >
      {title}
    </button>
  );
};

export default TextButton;
