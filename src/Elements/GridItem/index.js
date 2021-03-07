import React from 'react'
import styles from './style.module.scss'

function GridItem({ title, postersrc }) {
  return (
    <article className={styles.item}>
      <img src={postersrc} alt={title} loading="lazy" />
      <header>
        <p>{title}</p>
      </header>
    </article>
  )
}

export default GridItem
