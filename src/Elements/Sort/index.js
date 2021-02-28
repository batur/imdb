import React from 'react'
import styles from './style.module.scss'

function Sort() {
  return (
    <div className={styles.sortBox}>
      <form className={styles.form}>
        <select>
          <option>Year -</option>
          <option>Year +</option>
          <option>Alpha +</option>
          <option>Alpha -</option>
        </select>
      </form>
    </div>
  )
}

export default Sort
