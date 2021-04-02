import React from 'react'
import Head from 'next/head'
import GridList from '@Components/GridList'
import GridItem from 'src/Elements/GridItem'

function Home() {
  const pages = [
    {
      title: 'Movies',
      poster: 'dummy.jpg',
    },
    {
      title: 'Series',
      poster: 'dummy.jpg',
    },
  ]
  return (
    <>
      <Head>
        <title>Popular Titles | Demo Streaming </title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <GridList>
        {pages.map((item) => (
          <GridItem
            key={item.title}
            title={item.title}
            postersrc={item.poster}
            path={`/${item.title.toLowerCase()}`}
          />
        ))}
      </GridList>
    </>
  )
}

export default Home
