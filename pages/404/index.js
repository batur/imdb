import React from 'react'
import Head from 'next/head'
import Header from 'src/Components/Header'
import Footer from 'src/Components/Footer'
import styles from './style.module.scss'
import Link from 'next/link'

export default function index() {
  return (
    <>
      <Head>
        <title>Oops | 404 </title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <p>Oops, something went wrong...</p>
      <Link href={'/'}>
        <a>
          <h2 className={styles.homebtn}>◀️ Go Back Home</h2>
        </a>
      </Link>
    </>
  )
}
