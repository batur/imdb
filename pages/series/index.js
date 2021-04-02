import React, { useEffect } from 'react'
import Filter from '@Components/Filter'
import GridList from '@Components/GridList'
import GridItem from 'src/Elements/GridItem'
import { connect, useDispatch } from 'react-redux'
import { getSeriesData } from 'src/Redux/Actions/index'
import Head from 'next/head'

const Series = (props) => {
  const dispatch = useDispatch()
  const items = props.appliedFilters
  useEffect(() => {
    dispatch(getSeriesData())
  }, [])
  return (
    <>
      <Head>
        <title>Popular Series | Demo Streaming </title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {props.isLoading ? null : <Filter />}
      <GridList>
        {props.isLoading ? (
          <p>Loading...</p>
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

export default connect(mapStateToProps, { getSeriesData })(Series)
