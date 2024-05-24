import { ReactNode } from "react";
import styles from "./accordion.module.css";

const Accordion = ({
  children,
  classes,
  ...attrs
}: {
  children: ReactNode;
  classes: string;
}) => {
  return (
    <div {...attrs} className={`${styles.accordion} ${classes}`}>
      {children}
    </div>
  );
};

export default Accordion;
