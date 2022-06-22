import React from "react";
import Headers from "../Headers/Headers";
import Proud from "../Proud/Proud";
import styles from "./Main.module.sass";

function Main() {
  return (
    <div className={styles.mainWrapper}>
      <Headers />
      <Proud />
    </div>
  );
}

export default Main;
