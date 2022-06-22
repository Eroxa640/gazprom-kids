import React from "react";
import Headers from "../Headers/Headers";
import Proud from "../Proud/Proud";
import styles from "./Main.module.sass";
import Backer from "../Backer/Backer";
import Faq from "../Faq/Faq";

function Main() {
  return (
    <div className={styles.mainWrapper}>
      <Headers />
      <Proud />
      <Backer />
      <Faq />
    </div>
  );
}

export default Main;
