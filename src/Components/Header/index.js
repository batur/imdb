import React from 'react'
import Link from 'next/link'
import Button from '@Elements/Button'
import styles from './style.module.scss'

export default function index() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.brand}>
              <Link href="/">
                <a>
                  <h1 className={styles.title}>Demo Streaming</h1>
                </a>
              </Link>
            </div>
            <div className={styles.btngroup}>
              <Button variant={1}>Log in</Button>
              <Button>Start your free trial</Button>
            </div>
          </div>
        </div>
        <div className={styles.sub}>
          <div className={styles.container}>
            <h2 className={styles.subtitle}>Popular Titles</h2>
          </div>
        </div>
      </header>
    </>
  )
}
