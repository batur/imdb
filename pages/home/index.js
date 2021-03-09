import React, { useEffect } from 'react'
import Head from 'next/head'
import styles from './style.module.scss'
import Header from '@Components/Header'
import Footer from '@Components/Footer'
import GridList from '@Components/GridList'
import GridItem from 'src/Elements/GridItem'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from 'src/Redux/Actions/index'

function Home() {
  const pages = [
    {
      title: 'Movies',
      poster: 'dummy.jpg',
    },
    {
      title: 'Series',
      poster: 'dummy.jpg',
    },
  ]
  return (
    <>
      <Head>
        <title>Popular Titles | Demo Streaming </title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header subtitle={'Titles'} />
      <main className={styles.main}>
        <div className={styles.container}>
          <GridList>
            {pages.map((item) => (
              <GridItem key={item.title} title={item.title} postersrc={item.poster} />
            ))}
          </GridList>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
