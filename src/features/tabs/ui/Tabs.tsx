"use client";

import Link from "next/link";
import { tabLinks } from "../model/index";
import styles from "./tabs.module.css";
import { Tabs } from "humo-ui";
import { useState } from "react";

const TabsBar = () => {
  const [tabValue, setTabValue] = useState<number | string>(1);
  return (
    // <div className={styles.tabs}>
    //   {tabLinks.map((tab) => {
    //     return (
    //       <Link className={styles.tab_link} key={tab.value} href={tab.value}>
    //         {tab.lable}
    //       </Link>
    //     );
    //   })}
    // </div>
    <Tabs
      className={styles.tabs}
      defaultValue={tabValue}
      setValue={(value) => setTabValue(value)}
    >
      {tabLinks.map((tab) => {
        return (
          <Tabs.Item key={tab.value} value={tab.value}>
            {tab.lable}
            
          </Tabs.Item>
        );
      })}
    </Tabs>
  );
};

export default TabsBar;
