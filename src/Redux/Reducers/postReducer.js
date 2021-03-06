import { initialState } from '../Store/initState'
import * as types from '../Types'

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BEGIN:
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    case types.SUCCESS:
      return {
        ...state,
        posts: action.payload.entries,
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
