"use client";

import { ReactNode } from "react";
import styles from "./chip.module.css";

const Chips = ({
  children,
  clases,
  ...attrs
}: {
  children: ReactNode;
  clases: string;
}) => {
  return (
    <div {...attrs} className={`${clases} ${styles.chips}`}>
      {children}
    </div>
  );
};

export default Chips;
