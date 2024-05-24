import Logo from "@/shared/logo/Logo";
import styles from "./header.module.css";
import BurgerButton from "@/shared/burger_button/BurgerButton";
import { Navbar } from "@/features/navbar";
import { Language } from "@/features/language";
import { Tabs } from "@/features/tabs";

const HeaderWidget = () => {
  return (
    <header className={styles.header}>
      <div className={styles.appbar}>
        <div className={styles.logo_wrapper}>
          <Logo /> <Navbar />
        </div>
        <div className={styles.lang_container}>
          <Language />
        </div>
        <BurgerButton />
      </div>
      <hr className={styles.vertical_line} />
      <Tabs />
    </header>
  );
};

export default HeaderWidget;
