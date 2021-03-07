import React, { useEffect } from 'react'
import styles from './style.module.scss'
import Header from '@Components/Header'
import Footer from '@Components/Footer'
import Filter from '@Components/Filter'
import GridList from '@Components/GridList'
import GridItem from 'src/Elements/GridItem'
import { useDispatch, useSelector } from 'react-redux'
import { getSeriesData } from 'src/Redux/Actions/index'

function Series() {
  const dispatch = useDispatch()
  const { posts, isLoading, message } = useSelector((state) => state.postData)

  useEffect(() => {
    message === '' ? dispatch(getSeriesData()) : console.log('dolu')
  }, [])
  return (
    <>
      <Header subtitle={'Series'} />
      <main className={styles.main}>
        <div className={styles.container}>
          {isLoading ? null : <Filter />}
          <GridList>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              [
                posts &&
                  posts.map((item) => (
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

export default Series
