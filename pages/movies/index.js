import React, { useEffect } from 'react'
import styles from './style.module.scss'
import Header from '@Components/Header'
import Footer from '@Components/Footer'
import Filter from '@Components/Filter'
import GridList from '@Components/GridList'
import GridItem from 'src/Elements/GridItem'
import { connect, useDispatch } from 'react-redux'
import { getMovieData } from 'src/Redux/Actions/index'

const Movies = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovieData())
  }, [])
  return (
    <>
      <Header subtitle={'Movies'} />
      <main className={styles.main}>
        <div className={styles.container}>
          {props.isLoading ? null : <Filter />}
          <GridList>
            {props.isLoading ? (
              <p>Loading...</p>
            ) : props.message ? (
              <p>{props.message}</p>
            ) : (
              [
                props.posts.map((item) => (
                  <GridItem
                    key={item.title}
                    postersrc={item.images['Poster Art'].url}
                    title={item.title}
                  />
                )),
              ]
            )}
          </GridList>
        </div>
      </main>
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    isLoading: state.isLoading,
    message: state.message,
    appliedFilters: state.appliedFilters,
  }
}

export default connect(mapStateToProps, { getMovieData })(Movies)
