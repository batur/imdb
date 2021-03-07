import axios from 'axios'
import * as types from '../Types/index'

export const getData = () => (dispatch) => {
  dispatch({ type: types.BEGIN })
  axios
    .get('https://raw.githubusercontent.com/pankod/frontend-challenge/master/feed/sample.json')
    .then((response) => dispatch({ type: types.SUCCESS, payload: response.data }))
    .catch((error) => dispatch({ type: types.ERROR, payload: error.message }))
}
