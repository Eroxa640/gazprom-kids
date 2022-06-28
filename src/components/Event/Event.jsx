import React from "react";
import styles from "./Event.module.sass";
import {motion} from 'framer-motion'
function Event() {
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
    <div className={styles.event_head}>
      <div className={styles.event}>
        <div className={styles.event_container}>
          <div className={styles.event_desc}>
            <h1>Какие мероприятия проходят у нас</h1>
            <div className={styles.event_info}>
              <motion.div 
                className={styles.event_block}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 1,
                }}
                variants={secondVar}
                custom={1}
                >
                <h2
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-center"
                >
                  80+
                </h2>
                <p>Успешных мероприятий</p>
              </motion.div>
              <motion.div
                className={styles.event_block}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 1,
                }}
                variants={secondVar}
                custom={1}
                >
                <h2>35+</h2>
                <p>Благотворительных празднований</p>
              </motion.div>
              <motion.div
                className={styles.event_block}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 1,
                }}
                variants={firstVar}
                custom={1}
                >
                <h2>10</h2>
                <p>Государственных мероприятий</p>
              </motion.div>
              <motion.div
                className={styles.event_block}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 1,
                }}
                variants={firstVar}
                custom={1}
                >
                <h2>23</h2>
                <p>Иностранных меропиятий</p>
              </motion.div>
            </div>

            <div className={styles.event_event}>
              <motion.div className={styles.event_card}>
                <div className={styles.card_container}>
                  <img src="/img/card_1.png" />
                  <h1>Успешные мероприятия</h1>
                  <p>
                    В нашем комплексе проводят тхэквандо GTF которые признаны
                    самой лучшей федерацией в СНГ
                  </p>
                </div>
              </motion.div>

              <div className={styles.event_card}>
                <div className={styles.card_container}>
                  <img src="/img/card_2.png" />
                  <h1>Благотворительные мероприятия</h1>
                  <p>
                    Мы проводим благотворительные мероприятия детям которые
                    нуждаются в нашей помощи
                  </p>
                </div>
              </div>

              <div className={styles.event_card}>
                <div className={styles.card_container}>
                  <img src="/img/card_3.png" />
                  <h1>Государственные мероприятия</h1>
                  <p>
                    У нас тесное взаимодействие с нашим государством и мы всегда
                    потдерживаю друг друга в любых ситуациях
                  </p>
                </div>
              </div>

              <div className={styles.event_card}>
                <div className={styles.card_container}>
                  <img src="/img/card_4.png" />
                  <h1>Иностранные мероприятия</h1>
                  <p>
                    Мы взаимодействуем нетолько с нашей страной но и другими
                    странами такими как (Казахстан и Узбекистан)
                  </p>
                </div>
              </div>
            </div>

            <button className={styles.event_button}>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
