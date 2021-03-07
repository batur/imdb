import { combineReducers } from 'redux'
import { getDataReducer } from './getDataReducer'
import { filterReducer } from './filterReducer'
import { sortReducer } from './sortReducer'

export default combineReducers({
  postData: getDataReducer,
  sortData: sortReducer,
})
