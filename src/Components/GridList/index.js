import React from 'react'
import GridItem from '@Elements/GridItem'
import styles from './style.module.scss'

function GridList() {
  return (
    <section className={styles.list}>
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
    </section>
  )
}

export default GridList
