"use client";
import ElevatedButton from "@/shared/elevated_button/ElevatedButton";
import styles from "./credit_action.module.css";
import TextButton from "@/shared/text_button/TextButton";

export default function CreditAction() {
  const handleRequest = () => {};
  return (
    <div className={styles.credit_actions}>
      <ElevatedButton classes={styles.credit_action_send} onClick={handleRequest} title="Оставить заявку" />
      <TextButton classes={styles.info_action} onClick={handleRequest} title="Подробнее" />
    </div>
  );
}
