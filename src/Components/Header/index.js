import React from 'react'
import Link from 'next/link'
import styles from './style.module.scss'

export default function index() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <div className={styles.brand}>
            <Link href="/">
              <h1>DEMO Streaming</h1>
            </Link>
          </div>
          <h4>Button</h4>
        </div>
        <div></div>
      </header>
    </>
  )
}
