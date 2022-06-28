import React, { useState } from "react";
import styles from "./Section.module.sass";

function Section() {
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);
  const [isOpen5, setOpen5] = useState(false);

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
  const Toogle4 = () => {
    setOpen4((isOpen) => {
      return !isOpen;
    });
  };
  const Toogle5 = () => {
    setOpen5((isOpen) => {
      return !isOpen;
    });
  };
  return (
    <div className={styles.faq}>
      <div className={styles.faq_container}>
        <div className={styles.faq_desc}>
          <h1>Секции</h1>
          <div className={styles.accordion}>
            <div className={styles.accordion_item}>
              <button
                className={styles.accordion_button}
                onClick={Toogle}
                id={styles.accordion_button_1}
                aria-expanded="false"
              >
                <span className={styles.accordion_title}>
                  Борьба (Вольная, Греко-Римская)
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
              {isOpen ? (
                <div className={styles.accordion_content}>
                  <p className={styles.parag}>
                    Режим: Пн - Сб <br />
                    Время: 8:00 - 24:00 <br />
                    Оплата: 500 - 1500 <br />
                  </p>
                </div>
              ) : null}

              <button
                className={styles.accordion_button}
                onClick={Toogle2}
                id={styles.accordion_button_1}
                aria-expanded="false"
              >
                <span className={styles.accordion_title}>Тхэквандо GTF</span>
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
              {isOpen2 ? (
                <div className={styles.accordion_content}>
                  <p className={styles.parag}>
                    Режим: Пн - Сб <br />
                    Время: 8:00 - 24:00 <br />
                    Оплата: 800 - 2300 <br />
                  </p>
                </div>
              ) : null}

              <button
                className={styles.accordion_button}
                onClick={Toogle3}
                id={styles.accordion_button_1}
                aria-expanded="false"
              >
                <span className={styles.accordion_title}>Танцы</span>
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
              {isOpen3 ? (
                <div className={styles.accordion_content}>
                  <p className={styles.parag}>
                    Режим: Пн - Сб <br />
                    Время: 8:00 - 24:00 <br />
                    Оплата: 300 - 1100 <br />
                  </p>
                </div>
              ) : null}
              <button
                className={styles.accordion_button}
                onClick={Toogle4}
                id={styles.accordion_button_1}
                aria-expanded="false"
              >
                <span className={styles.accordion_title}>Футбол</span>
                {isOpen4 ? (
                  <span className={styles.math} style={{ color: "black" }}>
                    -
                  </span>
                ) : (
                  <span className={styles.math} style={{ color: "black" }}>
                    +
                  </span>
                )}
              </button>
              {isOpen4 ? (
                <div className={styles.accordion_content}>
                  <p className={styles.parag}>
                    Режим: Пн - Сб <br />
                    Время: 8:00 - 24:00 <br />
                    Оплата: 600 - 1700 <br />
                  </p>
                </div>
              ) : null}
              <button
                className={styles.accordion_button}
                onClick={Toogle5}
                id={styles.accordion_button_1}
                aria-expanded="false"
              >
                <span className={styles.accordion_title}>Бокс</span>
                {isOpen5 ? (
                  <span className={styles.math} style={{ color: "black" }}>
                    -
                  </span>
                ) : (
                  <span className={styles.math} style={{ color: "black" }}>
                    +
                  </span>
                )}
              </button>
              {isOpen5 ? (
                <div className={styles.accordion_content}>
                  <p className={styles.parag}>
                    Режим: Пн - Сб <br />
                    Время: 8:00 - 24:00 <br />
                    Оплата: 600 - 1700 <br />
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

export default Section;
