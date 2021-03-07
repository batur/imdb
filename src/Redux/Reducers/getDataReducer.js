import { initialState } from '../Store/initState'
import * as types from '../Types'
import { sortAsc, splitting } from '../Helpers'
export const getDataReducer = (state = initialState, action, type) => {
  switch (action.type) {
    case types.BEGIN:
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    case types.MOVIES_SUCCESS:
      const newMoviesState = Object.assign([], action.payload.entries)
      const newMovies = splitting(newMoviesState, 'movies')
      return {
        ...state,
        posts: sortAsc(newMovies, 'title'),
        isLoading: false,
        error: '',
      }

    case types.SERIES_SUCCESS:
      const newSeriesState = Object.assign([], action.payload.entries)
      const newSeries = splitting(newSeriesState, 'series')
      return {
        ...state,
        posts: sortAsc(newSeries, 'title'),
        isLoading: false,
        error: '',
      }

    case types.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
