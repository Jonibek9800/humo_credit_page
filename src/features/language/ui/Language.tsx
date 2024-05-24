import styles from "./language.module.css";

const Language = () => {
  return (
    <>
      <div className={styles.lang_wrapper}>
        <label className={styles.lang_lable} htmlFor="" id="lang"></label>
        <select name="landuage" id="lang" className={styles.lang_select}>
          <option value="RU">RU</option>
          <option value="TJ">TJ</option>
          <option value="US">EN</option>
        </select>
      </div>
    </>
  );
};

export default Language;
