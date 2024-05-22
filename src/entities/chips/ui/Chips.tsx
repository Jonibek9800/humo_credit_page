"use client";
import Chip from "@/shared/chip/Chip";
import { chipList } from "../model";
import styles from "./chips.module.css";

export default function Chips() {
  const handleCLick = (e: any) => {
    // e.target.classList.add(styles.chip_active);
    // console.log();
  };

  return (
    <div className={styles.chips}>
      {chipList.map((chip) => {
        return (
          <Chip
            key={chip.id}
            title={chip.name}
            isActiv={chip.isActive}
            onClick={handleCLick}
            id={chip.id}
          />
        );
      })}
    </div>
  );
}
