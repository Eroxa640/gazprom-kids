import React from "react";
import styles from "./Backer.module.sass";

function Backer() {
  return (
    <div>
      <div className={styles.sponsor}>
        <div className={styles.sponsor_container}>
          <div className={styles.sponsor_desc}>
            <h1>Наш спонсор</h1>
            <div className={styles.faq_sponsor}>
              <div className={styles.faq_container}>
                <div className={styles.sponsor_left}>
                  <p>Мэрия</p>
                  <h5>Бишкек</h5>
                </div>
                <div className={styles.sponsor_right}>
                  <img src="/img/meria_logo.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backer;
