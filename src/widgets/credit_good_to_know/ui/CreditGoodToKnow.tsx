"use client";
import Chips from "@/shared/chips/Chips";
import { chipList } from "../model";
import styles from "./credit_good_to_know.module.css";
import { useState } from "react";
import { Accordion } from "humo-ui";
import { Accordions } from "@/entities/accordions";

export default function CrditGoodToKnow() {
  const [chipLable, setChiplable] = useState<string>("Требования к заёмщику");
  const handleCLick = ({ title, id }: { title: string; id: number }) => {
    setChiplable(title);
  };
  return (
    <div className={styles.crdit_good_to_know_container}>
      <div className={styles.crdit_good_to_know_wrap}>
        <h1 className={styles.good_to_know_title}>Полезно знать</h1>
        <Chips clases={styles.chip_list}>
          {chipList.map((chip) => {
            return (
              <div
                id={chip.id.toString()}
                onClick={(e) => handleCLick(chip)}
                className={
                  chipLable === chip.title
                    ? `${styles.good_to_know_chip} ${styles.good_to_know_chip_active}`
                    : styles.good_to_know_chip
                }
                key={chip.id}
              >
                {chip.title}
              </div>
            );
          })}
        </Chips>

        {/* <div style={{display: "flex", overflowX: "scroll",}}></div> */}
      </div>
      <Accordions />
    </div>
  );
}
