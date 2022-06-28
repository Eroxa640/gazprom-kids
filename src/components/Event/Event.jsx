import React from "react";
import styles from "./Event.module.sass";
import {motion} from 'framer-motion'
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { eventFetch } from "../../store/reducers/event.reducer";
import {NavLink} from 'react-router-dom'
function Event() {
  const dispatch = useDispatch()
  const store = useSelector(store => store)
  const events = store.events.event
  useEffect(() => {
    dispatch(eventFetch())
  }, [dispatch])
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
              {
                events.map(item => {
                  return (
                  <div key={item.id} className={styles.event_card}>
                    <div className={styles.card_container}>
                      <img src={item.image.formats.small.url} alt={item.title} />
                      <h1>{item.title}</h1>
                      <p>
                        {item.parag}
                      </p>
                    </div>
                  </div>
                  )
                })
              }
            </div>
            <NavLink className={styles.navlink} to='/events'><button className={styles.event_button}>Подробнее</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
