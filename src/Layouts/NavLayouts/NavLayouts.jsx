import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from './NavLayouts.module.sass'

function NavLayouts({children}) {
  return (
    <div className={styles.wrapper}>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default NavLayouts