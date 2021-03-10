import React from 'react'
import styles from './style.module.scss'
import { connect, useDispatch } from 'react-redux'
import { sortByTitle, sortByYear } from 'src/Redux/Actions/index'

function Sort() {
  const dispatch = useDispatch()
  const sortByInput = (e) => {
    let value = e.target.value
    console.log(value)
    let direction = value.endsWith('Ascending') ? 'asc' : 'desc'
    console.log(direction)
    if (value.startsWith('Alpha')) {
      dispatch(sortByTitle({ direction }))
    } else {
      dispatch(sortByYear({ direction }))
    }
  }
  return (
    <div className={styles.sortBox}>
      <div className={styles.sortBox__form}>
        <select
          className={styles.form__sort}
          onChange={(e) => {
            sortByInput(e)
          }}
        >
          <option disabled selected>
            Sort By...
          </option>
          <option>Year Descending</option>
          <option>Year Ascending</option>
          <option>Alpha Ascending</option>
          <option>Alpha Descending</option>
        </select>
      </div>
    </div>
  )
}

export default Sort
