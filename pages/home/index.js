import React from 'react'
import Head from 'next/head'
import GridList from 'src/Components/GridList'
import GridItem from 'src/Elements/GridItem'

function Home() {
  const pages = [
    {
      title: 'Movies',
      poster:
        'https://streamcoimg-a.akamaihd.net/000/958/726/958726-PosterArt-46061b8e3d5b4c8fd690d045ee524d0f.jpg',
    },
    {
      title: 'Series',
      poster:
        'https://streamcoimg-a.akamaihd.net/000/120/27/12027-PosterArt-3f8c0625d76d30c9a583c647e4c29c67.jpg',
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
