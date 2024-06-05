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
    <div className={styles.elevated_button_wrapper}>
      <Button
        style={{
          border: "solid red 1px",
        }}
        onClick={onClick}
        w="100%"
      >
        {title}
      </Button>
    </div>
  );
};

export default ElevatedButton;
