import '@GlobalCss/normalize.css'
import '@GlobalCss/globals.css'
import React from 'react'
import { Provider } from 'react-redux'
import { useStore } from 'src/Redux/Store'

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
// const makestore = () => store
// const wrapper = createWrapper(makestore)

// export default wrapper.withRedux(MyApp)
