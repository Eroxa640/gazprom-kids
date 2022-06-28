import React from "react";
import styles from "./Proud.module.sass";
import {motion} from 'framer-motion'

function Proud() {
  let firstVar = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: (num) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: num * 0.1,
      },
    }),
  };
  let secondVar = {
    hidden: {
      x: 40,
      opacity: 0,
    },
    visible: (num) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: num * 0.1,
      },
    }),
  };
  return (
    <div className={styles.proud}>
      <div className={styles.proud_container}>
        <div className={styles.proud_desc}>
          <h1>Наша гордость</h1>
          <p>У нас есть много уникальных личностей но они исключительные</p>
          <div className={styles.grid_block}>
            <motion.div 
              className={styles.grid}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 1,
              }}
              variants={firstVar}
              custom={1}
            >
              <h2>1. Тренера</h2>
              <p>
                Наши тренера приуспели по всем параметрам, они все заслеженные
                мастера спорта в своих областях
              </p>
            </motion.div>

            <motion.div
              className={styles.grid}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 1,
              }}
              variants={secondVar}
              custom={1}
            >
              <h2>2. Парни</h2>
              <p>
                У нас есть уникалные дети: Усердные, сильные и умные в своих
                мыслях Мы тренеруем не только физическую часть но и духовную
              </p>
            </motion.div>

            <motion.div
              className={styles.grid}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 1,
              }}
              variants={firstVar}
              custom={1}
            >
              <h2>3. Девушки</h2>
              <p>
                Наши девушки умелые и на порядок лучше остальных девушек Они
                наша гордость и надежда.
              </p>
            </motion.div>

            <motion.div
              className={styles.grid}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 1,
              }}
              variants={secondVar}
              custom={1}
            >
              <h2>4. Персонал</h2>
              <p>Все наши достижения стоят за этими прекрасными людьми</p>
            </motion.div>
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
