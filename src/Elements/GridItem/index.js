import React from 'react'
import styles from './style.module.scss'

function GridItem() {
  return (
    <article className={styles.item}>
      <img src="/dummy.jpg" />
      <header>
        <p>Title</p>
      </header>
    </article>
  )
}

export default GridItem
