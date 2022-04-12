import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
function GridItem({ title, postersrc, path }) {
  const staticLink = '?#'
  const imgwidth = '100%'
  path === undefined ? (path = staticLink) : (path = path)
  return (
    <>
      <Link href={path}>
        <a style={{ display: 'contents' }}>
          <article className={styles.item}>
            {/*<img className={styles.poster} src={postersrc} alt={title} loading="lazy" />*/}
            <Image
              className={styles.poster}
              src={postersrc}
              alt={title}
              width={100}
              height={160}
              layout="responsive"
              loading="lazy"
            />
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
