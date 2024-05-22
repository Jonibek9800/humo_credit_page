"use client";

import Link from "next/link";
import { tabLinks } from "../model/tab_links";
import styles from "./tabs.module.css";

const TabsBar = () => {
  return (
    <div className={styles.tabs}>
      {tabLinks.map((tab) => {
        return (
          <Link className={styles.tab_link} key={tab.value} href={tab.value}>
            {tab.lable}
          </Link>
        );
      })}
    </div>
  );
};

export default TabsBar;
