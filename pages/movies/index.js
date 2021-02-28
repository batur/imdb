import React from 'react'
import styles from './style.module.scss'
import Header from '@Components/Header'
import Footer from '@Components/Footer'
import Filter from '@Components/Filter'
import GridList from '@Components/GridList'

function Movies() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Filter />
          <GridList />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Movies
