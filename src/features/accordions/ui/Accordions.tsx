"use client";

import Accordion from "@/shared/accordion/Accordion";
import styles from "./accordions.module.css";
import { useState } from "react";

export default function Accordions() {
  const [activePanel, setActivePane] = useState<boolean>(false);

  const changeActive = () => {
    setActivePane((prev) => !prev);
  };
  return (
    <Accordion classes="">
      <div onClick={changeActive} className={styles.accordion_item}>
        Основные требования к заёмщику
        <img
          className={
            activePanel
              ? styles.arrow_accordion
              : `${styles.arrow_accordion_activ}`
          }
          src="/down-arrow.png"
          alt="arrow"
        />
      </div>
      <div
        className={
          activePanel
            ? `${styles.accordion_item_panel}`
            : `${styles.accordion_item_panel} ${styles.accordion_item_panel_active}`
        }
      >
        <ul className={styles.accordion_item_content}>
          <li className={styles.accordion_item_content_li}>Физические лица старше 20 лет</li>
          <li className={styles.accordion_item_content_li}>Опыт работы не менее 6 месяцев</li>
          <li className={styles.accordion_item_content_li}>Cправка о заработной плате</li>
          <li className={styles.accordion_item_content_li}>Отсутствие обязательств перед третьими лицами</li>
        </ul>
      </div>
    </Accordion>
  );
}
