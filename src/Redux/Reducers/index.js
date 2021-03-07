import { combineReducers } from 'redux'
import { getDataReducer } from './getDataReducer'
import { sorReducer } from './filterReducer'
import { filterReducer } from './sortReducer'

export default combineReducers({
  postData: getDataReducer,
})
