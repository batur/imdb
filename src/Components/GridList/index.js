import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'

function GridList({ children }) {
  return <section className={styles.list}>{children}</section>
}

export default GridList
