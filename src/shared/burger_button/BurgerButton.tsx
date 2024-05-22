import Image from "next/image";
import styles from "./burger.module.css";

const BurgerButton = () => {
  return (
    <button className={styles.burger}>
      <Image src="/burger.png" alt="burger" width={24} height={24} />
    </button>
  );
};

export default BurgerButton;
