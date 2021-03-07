import React, { useEffect } from 'react'
import styles from './style.module.scss'
import Header from '@Components/Header'
import Footer from '@Components/Footer'
import GridList from '@Components/GridList'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from 'src/Redux/Actions/index'

function Home() {
  return (
    <>
      <Header subtitle={'Titles'} />
      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/movies">
            <a>
              <h3>Movies</h3>
            </a>
          </Link>
          <Link href="/series">
            <a>
              <h3>Series</h3>
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
