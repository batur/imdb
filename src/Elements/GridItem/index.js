import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.scss'
import Link from 'next/link'
function GridItem({ title, postersrc, path }) {
  const staticLink = '?#'
  path === undefined ? (path = staticLink) : (path = path)
  return (
    <>
      <Link href={path}>
        <a style={{ display: 'contents' }}>
          <article className={styles.item}>
            <img className={styles.poster} src={postersrc} alt={title} loading="lazy" />
            <header>
              <h2 className={styles.title}>{title}</h2>
            </header>
          </article>
        </a>
      </Link>
    </>
  )
}

export default GridItem

GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  postersrc: PropTypes.string.isRequired,
  link: PropTypes.string,
}
