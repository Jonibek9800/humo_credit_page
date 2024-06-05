"use client";
import styles from "./chips.module.css";
import { useState } from "react";
import { chipList } from "../model";
import { Chip, Chips } from "humo-ui";

export default function ChipList() {
  const [chipLable, setChiplable] = useState<string[]>(["Все"]);
  // const handleCLick = ({ name, id }: { name: string; id: number }) => {
  //   setChiplable(name);
  // };

  return (
    // <Chips clases={styles.chips}>
    //   {chipList.map((chip) => {
    //     return (
    //       <div
    //         id={chip.id.toString()}
    //         onClick={(e) => handleCLick(chip)}
    //         className={
    //           chipLable === chip.name
    //             ? `${styles.chip} ${styles.chip_active}`
    //             : styles.chip
    //         }
    //         key={chip.id}
    //       >
    //         {chip.name}
    //       </div>
    //     );
    //   })}
    // </Chips>
    <Chips w="100%" value={chipLable} setValue={(value) => setChiplable(value)}>
      {chipList.map((chip) => {
        return (
          <Chip value={chip.name} key={chip.id}>
            {chip.name}
          </Chip>
        );
      })}
    </Chips>
  );
}
