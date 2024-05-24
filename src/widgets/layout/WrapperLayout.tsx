import { ReactNode } from "react";
import styles from "./layout.module.css";
import HeaderWidget from "../header/ui/Header";
import { Footer } from "../footer";

const WrapperLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={styles.container}>
        <HeaderWidget />
        {children}
        {/* <FooterWidget /> */}
      </div>
      <Footer />
    </>
  );
};

export default WrapperLayout;
