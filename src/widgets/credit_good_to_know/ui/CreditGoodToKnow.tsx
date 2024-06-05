"use client";
import { chipList } from "../model";
import styles from "./credit_good_to_know.module.css";
import { useState } from "react";
import { Accordions } from "@/features/accordions";
import { Chip, Chips } from "humo-ui";

export default function CrditGoodToKnow() {
  const [chipLable, setChiplable] = useState<string[]>([
    "Требования к заёмщику",
  ]);
  // const handleCLick = ({ title, id }: { title: string; id: number }) => {
  //   setChiplable(title);
  // };
  return (
    <div className={styles.crdit_good_to_know_container}>
      <h1 className={styles.good_to_know_title}>Полезно знать</h1>
      <div className={styles.credit_good_to_know_wrap}>
        <Chips
          w="768px"
          mW="100%"
          size="s"
          value={chipLable}
          setValue={(value) => setChiplable(value)}
        >
          {chipList.map((chip) => {
            return (
              <Chip value={chip.title} key={chip.id}>
                {chip.title}
              </Chip>
            );
          })}
        </Chips>

        {/* <div style={{display: "flex", overflowX: "scroll",}}></div> */}
      </div>
      <Accordions />
    </div>
  );
}
