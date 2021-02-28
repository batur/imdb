import React from 'react'
import styles from './style.module.scss'
import Header from '@Components/Header'
import Footer from '@Components/Footer'
import Link from 'next/link'

function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/movies">
            <a>
              <h2>Movies</h2>
            </a>
          </Link>
          <Link href="/series">
            <a>
              <h2>Series</h2>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
