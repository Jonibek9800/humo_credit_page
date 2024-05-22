import { ReactNode } from "react";
import styles from "./layout.module.css";
import HeaderWidget from "../header/HeaderWidget";
import FooterWidget from "../footer/FooterWidget";

const WrapperLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <HeaderWidget />
      {children}
      {/* <FooterWidget /> */}
    </div>
  );
};

export default WrapperLayout;
