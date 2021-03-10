import React from 'react'
import Link from 'next/link'
import Button from '@Elements/Button'
import styles from './style.module.scss'
import PropTypes from 'prop-types'

export default function index({ subtitle }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_main}>
          <div className={styles.container}>
            <div className={styles.brand}>
              <Link href="/">
                <a>
                  <h1 className={styles.brand_title}>Demo Streaming</h1>
                </a>
              </Link>
            </div>
            <div className={styles.btngroup}>
              <Button variant={1}>Log in</Button>
              <Button>Start your free trial</Button>
            </div>
          </div>
        </div>
        <div className={styles.header_sub}>
          <div className={styles.container}>
            <h2 className={styles.subtitle}>Popular {subtitle}</h2>
          </div>
        </div>
      </header>
    </>
  )
}

index.propTypes = {
  subtitle: PropTypes.string.isRequired,
}
