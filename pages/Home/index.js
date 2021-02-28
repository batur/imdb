import React from 'react'
import styles from './style.module.scss'
import Header from '@Components/Header'
import Footer from '@Components/Footer'

function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <h1>Home</h1>
      <Footer />
    </div>
  )
}

export default Home
