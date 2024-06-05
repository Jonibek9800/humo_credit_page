"use client";
import { MouseEventHandler } from "react";
import styles from "./text_button.module.css";
import { Button } from "humo-ui";

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
    <div className={styles.text_button_wrapper}>
      <Button
        style={{
          border: "1px solid red",
        }}
        w="100%"
        appearance="transparent"
        {...attrs}
        onClick={onClick}
        className={`${styles.text_button} ${classes}`}
      >
        {title}
      </Button>
    </div>
  );
};

export default TextButton;
