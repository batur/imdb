import 'src/Styles/normalize.css'
import 'src/Styles/globals.css'
import React from 'react'
import { Provider } from 'react-redux'
import { useStore } from 'src/Redux/Store'
import Layout from 'src/Components/Layout'

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
// const makestore = () => store
// const wrapper = createWrapper(makestore)

// export default wrapper.withRedux(MyApp)
