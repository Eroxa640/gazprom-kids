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
          <NavLink to='/'>Главная</NavLink>
          <NavLink to='/team'>Команда</NavLink>
          <NavLink to='/section'>Секции</NavLink>
          <NavLink to='/events'>Мероприятии</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar