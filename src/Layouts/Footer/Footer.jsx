import React from "react";
import styles from "./Footer.module.sass";

function Footer() {
  return (
    <div className={styles.footer_head}>
      <div className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_top}>
            <p>Газпром - Детям</p>
            <img className={styles.footer_logo} src="/img/footer_logo.svg" />
          </div>
          <hr />
        </div>
        <div className={styles.footer_section}>
          <div className={styles.first_block}>
            <h5>Адрес</h5>
            <p>ул. Жайыл-Баатыра 66</p>
          </div>
          <div className={styles.second_block}>
            <h5>Связь</h5>
            <p>Исмаилова Алтынай Курманбековна</p>
          </div>
          <div className={styles.third_block}>
            <h5>Контактные данные</h5>
            <p>Email: ailinchoy@gmail.com</p>
            <hr />
            <p>Номер: +996 (777) 101 002</p>
            <hr />
            <p>Номер: +996 (508) 101 002</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
