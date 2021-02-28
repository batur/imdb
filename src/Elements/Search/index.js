import React from 'react'
import SearchIcon from '@Elements/Icons/Search'
import styles from './style.module.scss'

function Search() {
  return (
    <div className={styles.searchBox}>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Search..." />
        <button type="submit" className={styles.searchbtn}>
          <SearchIcon />
        </button>
      </form>
    </div>
  )
}

export default Search
