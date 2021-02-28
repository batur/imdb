import React from 'react'
import styles from './style.module.scss'
import Search from '@Elements/Search'
import Sort from '@Elements/Sort'

function Filter() {
  return (
    <div className={styles.filter}>
      <Search />
      <Sort />
    </div>
  )
}

export default Filter
