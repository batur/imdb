import React, { useEffect } from 'react'
import Filter from 'src/Components/Filter'
import GridList from 'src/Components/GridList'
import GridItem from 'src/Elements/GridItem'
import { connect, useDispatch } from 'react-redux'
import { getMovieData } from 'src/Redux/Actions/index'
import Head from 'next/head'

const Movies = (props) => {
  const dispatch = useDispatch()
  const items = props.appliedFilters
  useEffect(() => {
    dispatch(getMovieData())
  }, [])
  return (
    <>
      <Head>
        <title>Popular Movies | Demo Streaming </title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {props.isLoading ? null : <Filter />}
      <GridList>
        {props.isLoading ? (
          <p>Loading...</p>
        ) : props.message ? (
          <p>{props.message}</p>
        ) : (
          [
            items &&
              items.map((item) => (
                <GridItem
                  key={item.title}
                  postersrc={item.images['Poster Art'].url}
                  title={item.title}
                />
              )),
          ]
        )}
      </GridList>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    message: state.message,
    appliedFilters: state.appliedFilters,
  }
}

export default connect(mapStateToProps, { getMovieData })(Movies)
