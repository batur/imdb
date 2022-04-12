import React from 'react'
import styles from './style.module.scss'
import Search from 'src/Elements/Search'
import Sort from 'src/Elements/Sort'

function Filter() {
  return (
    <div className={styles.filter}>
      <Search />
      <Sort />
    </div>
  )
}

export default Filter
