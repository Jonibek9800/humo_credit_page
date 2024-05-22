import NavBar from "@/entities/navbar/ui/Navbar";
import Logo from "@/shared/logo/Logo";
import styles from "./header.module.css";
import Language from "@/entities/language/ui/Language";
import TabsBar from "@/entities/tabs/ui/TabBar";
import BurgerButton from "@/shared/burger_button/BurgerButton";

const HeaderWidget = () => {
  return (
    <header className={styles.header}>
      <div className={styles.appbar}>
        <div className={styles.logo_wrapper}>
          <Logo /> <NavBar />
        </div>
        <div className={styles.lang_container}>
          <Language />
        </div>
        <BurgerButton />
      </div>
      <hr className={styles.vertical_line} />
      <TabsBar />
    </header>
  );
};

export default HeaderWidget;
