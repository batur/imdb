import { createStore, compose } from 'redux'
import Reducers from '../Reducers/index'

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose
const store = createStore(Reducers, compose)

export default store
