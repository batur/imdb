import { initialState } from '../Store/initState'
import * as types from '../Types'
import { sortAsc } from '../Helpers'
export const getDataReducer = (state = initialState, action, type) => {
  switch (action.type) {
    case types.BEGIN:
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    case types.SUCCESS:
      const newState = Object.assign([], action.payload.entries)
      const newMovies = []
      const newSeries = []
      newState.map((item) => {
        if (item.programType == 'series' && item.releaseYear >= 2015) {
          newSeries.push(item)
        } else if (item.programType == 'movie' && item.releaseYear >= 2015) {
          newMovies.push(item)
        }
      })
      return {
        ...state,
        movies: sortAsc(newMovies, 'title'),
        series: sortAsc(newSeries, 'title'),
        isLoading: false,
        error: '',
      }

    case types.ERROR:
      return {
        ...state,
        posts: [],
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
