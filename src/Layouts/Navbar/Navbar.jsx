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
    <header className={styles.navbar}>
      <div id="container" className={styles.container}>
        <NavLink className={styles.logoItem} to="/">
          <img
            src='/img/logo-gazprom.png'
            alt="Ислам Курулуш"
            className={styles.logo__image}
          />
        </NavLink>
        <div
          className={cn(styles.navList, {
            [styles.navListVisible]: isOpen,
          })}
          >
          <nav className={styles.navItem}>
            <NavLink className={styles.nav__link} to='/'>Главная</NavLink>
            <NavLink className={styles.nav__link} to='/team'>Команда</NavLink>
            <NavLink className={styles.nav__link} to='/events'>Мероприятии</NavLink>
            <NavLink className={styles.nav__link} to='/sections'>Секции</NavLink>
          </nav>
        </div>
        <div className={styles.hamburger}>
          <Hamburger
            color="white"
            size={30}
            toggled={isOpen}
            toggle={setOpen}
            onToggle={(setOpen) => !setOpen}
          />
        </div>
      </div>
      <div className={styles.image}>
        <img className={styles.header__bg} src="/img/gazprom-bg.png" alt="Газпром детям" />
      </div>
      <div className={styles.header}>
        <h3 className={styles.header__title}>Газпром Детям</h3>
        <p className={styles.header__parag}>МП Физкультурно-оздоровительный комплекс при УФКиС мэрии города Бишкек</p>
        <NavLink to='/rent'>
          <button className={styles.header__btn}>Аренда помещения</button>
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar