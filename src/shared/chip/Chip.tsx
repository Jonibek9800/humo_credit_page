"use client";

import styles from "./chip.module.css";

const Chip = ({
  isActiv,
  title,
  onClick,
  id,
}: {
  id: number;
  isActiv: boolean;
  title: string;
  onClick: Function;
}) => {
  const chipStyle = () => {
    return isActiv ? `${styles.chip} ${styles.chip_active}` : styles.chip;
  };
  return (
    <span id={title} onClick={(e) => onClick(e)} className={chipStyle()}>
      {title}
    </span>
  );
};

export default Chip;
