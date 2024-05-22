import { MouseEventHandler } from "react";
import styles from "./elevated_button.module.css";

const ElevatedButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={onClick} className={styles.elevated_button}>
      {title}
    </button>
  );
};

export default ElevatedButton;
