import React from "react";
import styles from "./Proud.module.sass";

function Proud() {
  return (
    <div className={styles.proud}>
      <div className={styles.proud_container}>
        <div className={styles.proud_desc}>
          <h1>Наша гордость</h1>
          <p>У нас есть много уникальных личностей но они исключительные</p>
          <div className={styles.grid_block}>
            <div className={styles.grid}>
              <h2>1. Тренера</h2>
              <p>
                Наши тренера приуспели по всем параметрам, они все заслеженные
                мастера спорта в своих областях
              </p>
            </div>

            <div className={styles.grid}>
              <h2>2. Парни</h2>
              <p>
                У нас есть уникалные дети: Усердные, сильные и умные в своих
                мыслях Мы тренеруем не только физическую часть но и духовную
              </p>
            </div>

            <div className={styles.grid}>
              <h2>3. Девушки</h2>
              <p>
                Наши девушки умелые и на порядок лучше остальных девушек Они
                наша гордость и надежда.
              </p>
            </div>

            <div className={styles.grid}>
              <h2>4. Персонал</h2>
              <p>Все наши достижения стоят за этими прекрасными людьми</p>
            </div>
          </div>
          <div className={styles.button_bottom}>
            <button>Наши контакты</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proud;
