import React from 'react'
import styles from './style.module.scss'
import Header from '@Components/Header'
import Footer from '@Components/Footer'

function Series() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h2>Series</h2>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Series
