import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'

function GridItem({ title, postersrc, link }) {
  link == null ? (link = '#') : (link = link)
  return (
    <>
      <article className={styles.item}>
        <img src={postersrc} alt={title} loading="lazy" />
        <header>
          <p>{title}</p>
        </header>
      </article>
    </>
  )
}

export default GridItem

GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  postersrc: PropTypes.string.isRequired,
}
