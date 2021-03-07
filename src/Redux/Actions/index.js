import axios from 'axios'
import * as types from '../Types/index'

export const getMovieData = () => (dispatch) => {
  dispatch({ type: types.BEGIN })
  axios
    .get('https://raw.githubusercontent.com/pankod/frontend-challenge/master/feed/sample.json')
    .then((response) => dispatch({ type: types.MOVIES_SUCCESS, payload: response.data }))
    .catch((error) => dispatch({ type: types.ERROR, payload: error.message }))
}

export const getSeriesData = () => (dispatch) => {
  dispatch({ type: types.BEGIN })
  axios
    .get('https://raw.githubusercontent.com/pankod/frontend-challenge/master/feed/sample.json')
    .then((response) => dispatch({ type: types.SERIES_SUCCESS, payload: response.data }))
    .catch((error) => dispatch({ type: types.ERROR, payload: error.message }))
}
