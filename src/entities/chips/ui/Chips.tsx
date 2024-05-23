"use client";
import Chips from "@/shared/chips/Chips";
import styles from "./chips.module.css";
import { useState } from "react";
import { chipList } from "../model";

export default function ChipList() {
  const [chipLable, setChiplable] = useState<string>("Все");
  const handleCLick = ({ name, id }: { name: string; id: number }) => {
    setChiplable(name);
  };

  return (
    <Chips clases={styles.chips}>
      {chipList.map((chip) => {
        return (
          <div
            id={chip.id.toString()}
            onClick={(e) => handleCLick(chip)}
            className={
              chipLable === chip.name
                ? `${styles.chip} ${styles.chip_active}`
                : styles.chip
            }
            key={chip.id}
          >
            {chip.name}
          </div>
        );
      })}
    </Chips>
  );
}
