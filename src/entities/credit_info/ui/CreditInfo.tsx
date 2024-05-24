import { ICreditInfo } from "../model";
import styles from "./credit_info.module.css";

export default function CreditInfo({
  title,
  description,
  conditions,
}: ICreditInfo) {
  return (
    <div className={styles.credit_info}>
      <h1 className={styles.info_title}>{title}</h1>
      <p className={styles.info_desc}>{description}</p>
      <ul className={styles.info_conditions_list}>
        {conditions.map((condition) => {
          return (
            <li className={styles.info_condition_item} key={condition.id}>
              <span className={styles.info_condition_item_text}>
                {condition.text}
              </span>
              <h3 className={styles.info_condition_item_title}>
                {condition.title}
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
