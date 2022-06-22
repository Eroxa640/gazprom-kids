import React, { useState } from "react";
import styles from "./Faq.module.sass";

function Faq() {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const Toogle = () => {
    setOpen((isOpen) => {
      return !isOpen;
    });
  };
  const Toogle2 = () => {
    setOpen2((isOpen) => {
      return !isOpen;
    });
  };
  const Toogle3 = () => {
    setOpen3((isOpen) => {
      return !isOpen;
    });
  };
  return (
    <div className={styles.faq}>
      <div className={styles.faq_container}>
        <div className={styles.faq_desc}>
          <h1>FAQ</h1>
          <div className={styles.accordion}>
            <div className={styles.accordion_item}>
              <button
                className={styles.accordion_button}
                onClick={Toogle}
                id={styles.accordion_button_1}
                aria-expanded="false"
              >
                <span className={styles.accordion_title}>
                  1. Как связаться с нами?
                </span>
                {isOpen ? (
                  <span className={styles.math} style={{ color: "black" }}>
                    -
                  </span>
                ) : (
                  <span className={styles.math} style={{ color: "black" }}>
                    +
                  </span>
                )}
              </button>
              <hr />
              {isOpen ? (
                <div className={styles.accordion_content}>
                  <p>
                    Номер : +996 (777) 101 002 <br />
                    Email : ailinchoy@gmail.com <br />
                    Адрес : г.Бишкек, Ленинский район <br />
                    ж/м Арча-Бешик, <br />
                    ул.Жайыл-Баатыра 66
                  </p>
                </div>
              ) : null}

              <button
                className={styles.accordion_button}
                onClick={Toogle2}
                id={styles.accordion_button_1}
                aria-expanded="false"
              >
                <span className={styles.accordion_title}>
                  2. Какие мероприятие уже были
                </span>
                {isOpen2 ? (
                  <span className={styles.math} style={{ color: "black" }}>
                    -
                  </span>
                ) : (
                  <span className={styles.math} style={{ color: "black" }}>
                    +
                  </span>
                )}
              </button>
              <hr />
              {isOpen2 ? (
                <div className={styles.accordion_content}>
                  <p>
                    У нас проходят множество мероприятий но особенно проходят
                    мероприятии по тхэквандо GTF
                  </p>
                </div>
              ) : null}

              <button
                className={styles.accordion_button}
                onClick={Toogle3}
                id={styles.accordion_button_1}
                aria-expanded="false"
              >
                <span className={styles.accordion_title}>
                  3. Какие мероприятия будут в будущем
                </span>
                {isOpen3 ? (
                  <span className={styles.math} style={{ color: "black" }}>
                    -
                  </span>
                ) : (
                  <span className={styles.math} style={{ color: "black" }}>
                    +
                  </span>
                )}
              </button>
              <hr />
              {isOpen3 ? (
                <div className={styles.accordion_content}>
                  <p>
                    Главное событие этого года будет турнир по тхэквандо GTF
                    между СНГ, где примут участие только профессиональные бойцы
                    своих категории
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
