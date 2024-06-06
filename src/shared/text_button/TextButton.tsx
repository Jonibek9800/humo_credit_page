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
      <Button

        appearance="transparent"
        {...attrs}
        onClick={onClick}
        className={`${styles.text_button} ${classes}`}
      >
        {title}
      </Button>
  );
};

export default TextButton;
