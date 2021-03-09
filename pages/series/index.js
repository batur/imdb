import React, { useEffect } from 'react'
import styles from './style.module.scss'
import Header from '@Components/Header'
import Footer from '@Components/Footer'
import Filter from '@Components/Filter'
import GridList from '@Components/GridList'
import GridItem from 'src/Elements/GridItem'
import { connect, useDispatch } from 'react-redux'
import { getSeriesData } from 'src/Redux/Actions/index'

const Series = (props) => {
  const dispatch = useDispatch()
  const items = props.appliedFilters
  useEffect(() => {
    dispatch(getSeriesData())
  }, [])
  return (
    <>
      <Header subtitle={'Series'} />
      <main className={styles.main}>
        <div className={styles.container}>
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
        </div>
      </main>
      <Footer />
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
