import { MouseEventHandler } from "react";
import styles from "./text_button.module.css";

const TextButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={onClick} className={styles.text_button}>
      {title}
    </button>
  );
};

export default TextButton;
