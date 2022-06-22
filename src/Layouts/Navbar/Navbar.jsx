import React, { useEffect } from 'react'
import styles from './Navbar.module.sass'
import {NavLink} from 'react-router-dom'
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import cn from 'classnames'

function Navbar() {
  const [isOpen, setOpen] = useState(false)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);
  return (
    <div className={styles.container}>
      <div
      className={cn(styles.position, {
        [styles.navListVisible]: isOpen,
      })}
      >
        <nav className={styles.nav}>
          <NavLink to='/' className={styles.logo}>
            <img src="/img/logo-gazprom.png" alt="Логотип Газпром" />
          </NavLink>
          <div className={styles.navbar}>
            <NavLink className={styles.nav__link} to='/'>Главная</NavLink>
            <NavLink className={styles.nav__link} to='/team'>Команда</NavLink>
            <NavLink className={styles.nav__link} to='/section'>Секции</NavLink>
            <NavLink className={styles.nav__link} to='/events'>Мероприятии</NavLink>
          </div>
          <div className={styles.hamburger}>
            <Hamburger
              color='#0A8BFE' 
              onToggle={() => setOpen(!isOpen)} 
              toogled={isOpen}
              />
          </div>
        </nav>
      </div>
      <div className={styles.header}>
        <h3 className={styles.header__title}>Газпром Детям</h3>
        <p className={styles.header__parag}>МП Физкультурно-оздоровительный комплекс при УФКиС мэрии города Бишкек</p>
        <NavLink to='/'>
          <button className={styles.header__button}>Аренда помещений</button>
        </NavLink>
      </div>
      <div className={styles.image}>
        <img className={styles.navbar__bg} src="/img/gazprom-bg.png" alt="Газпром детям" />
      </div>
    </div>
  )
}

export default Navbar