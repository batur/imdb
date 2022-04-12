import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import styles from './Layout.module.scss'

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
