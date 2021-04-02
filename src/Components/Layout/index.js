import React from 'react'
import Header from '@Components/Header'
import Footer from '@Components/Footer'
import styles from './Layout.module.scss'
import GridList from '@Components/GridList'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
