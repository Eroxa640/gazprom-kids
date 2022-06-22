import React, { useState } from "react";
import styles from "./Faq.module.sass";

function Faq() {
  const [isOpen, setOpen] = useState(false);
  const Toogle = () => {
    setOpen((isOpen) => {
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
                onClick={Toogle}
                id={styles.accordion_button_1}
                aria-expanded="false"
              >
                <span className={styles.accordion_title}>
                  1. Как связаться с нами?
                </span>
                <span className={styles.icon} aria-hidden="true"></span>
              </button>
              {isOpen ? (
                <div className={styles.accordion_content}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                    pretium viverra suspendisse potenti.
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
