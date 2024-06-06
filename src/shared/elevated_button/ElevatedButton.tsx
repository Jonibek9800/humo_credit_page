"use client";
import { MouseEventHandler } from "react";
import styles from "./elevated_button.module.css";
import { Button } from "humo-ui";

const ElevatedButton = ({
  title,
  onClick,
  ...attrs
}: {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button className={styles.elevated_button} onClick={onClick}>
      {title}
    </Button>
  );
};

export default ElevatedButton;
