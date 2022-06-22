import React from 'react'
import styles from './Navbar.module.sass'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src="/img/logo-gazprom.png" alt="Логотип Газпром" />
        </div>
        <div className={styles.navbar}>
          <NavLink className={styles.nav__link} to='/'>Главная</NavLink>
          <NavLink className={styles.nav__link} to='/team'>Команда</NavLink>
          <NavLink className={styles.nav__link} to='/section'>Секции</NavLink>
          <NavLink className={styles.nav__link} to='/events'>Мероприятии</NavLink>
        </div>
      </nav>
      <div className={styles.image}>
        <img className={styles.navbar__bg} src="/img/gazprom-bg.png" alt="Газпром детям" />
      </div>
    </div>
  )
}

export default Navbar