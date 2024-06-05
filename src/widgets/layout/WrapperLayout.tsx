import { ReactNode } from "react";
import styles from "./layout.module.css";
import HeaderWidget from "../header/ui/Header";
import { Footer } from "humo-ui";
import { links } from "../footer";
import CustomFooter from "../footer/ui/Footer";
// import { Footer } from "../footer";

const WrapperLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={styles.container}>
        <HeaderWidget />
        {children}
        {/* <FooterWidget /> */}
      </div>
      <CustomFooter />
    </>
  );
};

export default WrapperLayout;
