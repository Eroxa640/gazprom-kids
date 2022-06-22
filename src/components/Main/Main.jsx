import React from 'react'
import Header from '../Header/Headers'
import styles from './Main.module.sass'

function Main() {
  return (
    <div className={styles.mainWrapper}>
      <Header/>
    </div>
  )
}

export default Main