import { initialState } from '../Store/initState'
import * as types from '../Types'
import { sortAsc, sortDesc, addNewFilter, removeFilter, splitting } from '../Helpers'

const filterReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.BEGIN:
      return {
        ...state,
        isLoading: true,
        message: '',
      }
    case types.MOVIES_SUCCESS:
      const newMoviesState = Object.assign([], action.payload.entries)
      const newMovies = sortAsc(splitting(newMoviesState, 'movies'), 'title')
      return {
        ...state,
        posts: newMovies.splice(0, 21),
        isLoading: false,
        message: '',
      }

    case types.SERIES_SUCCESS:
      const newSeriesState = Object.assign([], action.payload.entries)
      const newSeries = sortAsc(splitting(newSeriesState, 'series'), 'title')
      return {
        ...state,
        posts: newSeries.splice(0, 21),
        isLoading: false,
        message: '',
      }

    case types.ERROR:
      return {
        ...state,
        posts: [],
        appliedFilters: [],
        isLoading: false,
        message: action.payload,
      }
    case types.SORT_TITLE:
      const sortTitle = Object.assign([{}], state.posts)
      const sortedTitle =
        action.payload.direction === 'asc'
          ? sortAsc(sortTitle, 'title')
          : sortDesc(sortTitle, 'title')
      return {
        ...state,
        appliedFilters: sortedTitle,
      }
    case types.SORT_YEAR:
      const sortYear = Object.assign([{}], state.posts)
      const sortedYear =
        action.payload.direction === 'asc'
          ? sortAsc(sortYear, 'releaseYear')
          : sortDesc(sortYear, 'releaseYear')
      return {
        ...state,
        appliedFilters: sortedYear,
      }
    case types.FILTER_SET:
      return { ...state, appliedFilters: state.posts }
    case types.FILTER:
      let value = action.payload.value
      let filteredValues = state.posts.filter((item) => {
        return item.title.toLowerCase().includes(value)
      })
      return { ...state, appliedFilters: filteredValues }
    default:
      return {
        ...state,
        appliedFilters: state.posts,
      }
  }
}

export default filterReducers
