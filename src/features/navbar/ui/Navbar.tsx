import Link from "next/link";
import { navLink } from "../model/index";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <>
      <nav className={styles.navbar_wrapper}>
        {navLink.map((nav) => {
          return (
            <Link className={styles.nav_link} key={nav.key} href={nav.key}>
              {nav.lable}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default NavBar;
