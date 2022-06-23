import React from "react";
import styles from './Headers.module.sass'

function Headers() {
  return (
    <div className={styles.header}>
      <div className={styles.header__info}>
        <div className={styles.section}>
          <h3 className={styles.section__title}>Наши секции</h3>
          <p className={styles.section__parag}>У нас есть множество секции которые подойдут именно вам</p>
        </div>
        <div className={styles.header__grid}>
          <div className={styles.item}>
            <h3 className={styles.item__title}>Танцы</h3>
          </div>
          <div className={styles.item}>
            <h3 className={styles.item__title}>Таэквондо GTF</h3>
          </div>
          <div className={styles.item}>
            <h3 className={styles.item__title}>Борьба (Вольная, Греко-Римская)</h3>
          </div>
          <div className={styles.item}>
            <h3 className={styles.item__title}>Футбол</h3>
          </div>
          <div className={styles.item}>
            <h3 className={styles.item__title}>Бокс</h3>
          </div>
          <div className={styles.item}>
            <h3 className={styles.item__title}>Йога</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headers;
