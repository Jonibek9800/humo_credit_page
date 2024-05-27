import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.contact_us}>
          <div className={styles.store_path}>
            <h5 className={styles.store_path_title}>Приложение</h5>
            <div className={styles.store_path_content}>
              <button className={`${styles.store_btn}`}>
                <img src="/app_store.png" alt="app store" />
              </button>
              <button className={styles.store_btn}>
                <img src="/google_play.png" alt="google play" />
              </button>
              <button className={styles.store_btn}>
                <img src="/app_gallery.png" alt="App Gallery" />
              </button>
            </div>
          </div>
          <div className={styles.social_net}>
            <h5 className={styles.social_net_title}>
              Следите за нами в соцсетях
            </h5>
            <div className={styles.social_net_content}>
              <div className={styles.instagram}>
                <img src="/instagram.png" alt="Instagram" />
              </div>
              <div className={styles.telegram}>
                <img src="/telegram.png" alt="Telegram" />
              </div>
              <div className={styles.facebook}>
                <img src="/facebook.png" alt="Facebook" />
              </div>
            </div>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contact_from_tjk}>
              <span className={styles.contact_phone_tjk}>544</span>
              <p className={styles.contact_phone_tjk_info}>
                Для звонков с мобильных в Таджикистане
              </p>
            </div>
            <div className={styles.contact_from_world}>
              <span className={styles.contact_phone_world}>
                +992 88 777 55 44
              </span>
              <p className={styles.contact_phone_world_info}>
                Для звонков из любой точки мира
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footer_navbar}>
          <ul className={styles.footer_navbar_list}>
            <li className={styles.footer_navbar_list_item}>Хумо Онлайн</li>
            <li className={styles.footer_navbar_list_item}>Вакансии</li>
            <li className={styles.footer_navbar_list_item}>Карты Visa</li>
            <li className={styles.footer_navbar_list_item}>Кредиты</li>
            </ul>
            <ul className={styles.footer_navbar_list}>
            <li className={styles.footer_navbar_list_item}>Вклад — Сарчашма</li>
            <li className={styles.footer_navbar_list_item}>Валюты</li>
            <li className={styles.footer_navbar_list_item}>
              Денежные переводы
            </li>
          </ul>
        </div>
        <hr className={styles.footer_line} />
        <div className={styles.footer_faq}>
          <ul className={styles.footer_faq_list}>
            <li className={styles.footer_faq_list_item}>
              <Link className={styles.footer_faq_list_item_link} href={"/"}>
                © 2022 ЗАО МДО «Хумо»
              </Link>
            </li>
            <li className={styles.footer_faq_list_item}>
              <Link className={styles.footer_faq_list_item_link} href={"/"}>
                Лицензия НБТ №0000077 от 24 мая 2017 г.
              </Link>
            </li>
            <li className={styles.footer_faq_list_item}>
              <Link className={styles.footer_faq_list_item_link} href={"/"}>
                ЗАО МДО «Хумо» микрофинансовая организация в Таджикистане,
                обслуживающая более 100 000 клиентов.{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
