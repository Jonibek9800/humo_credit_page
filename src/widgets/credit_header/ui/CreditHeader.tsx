import { Chips } from "@/features/chips";
import styles from "./credit.module.css";

const CreditHeader = () => {
  return (
    <div className={styles.credit_header_wrapper}>
      <div className={styles.credit_header}>
        <h1 className={styles.credit_logo}>Кредиты на любые цели</h1>
        <Chips />
      </div>
    </div>
  );
};

export default CreditHeader;
