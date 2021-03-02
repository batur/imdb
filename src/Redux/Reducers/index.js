import filterReducer from '../Reducers/filter'
import sortReducer from '../Reducers/sort'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  sort: sortReducer,
  filter: filterReducer,
})

export default allReducers
