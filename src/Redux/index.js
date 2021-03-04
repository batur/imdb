const initialState = {
  changedFilter: [],
}

const SORT_ALPHABET = 'SORT ALPHABET'
const SORT_YEAR = 'SORT YEAR'
const FILTER_TITLE = 'FILTER TITLE'
const LOAD_DATA = 'LOAD DATA'

export const sortByAlphabet = (payload) => ({
  type: SORT_ALPHABET,
  payload,
})

export const sortByYear = (payload) => ({
  type: SORT_YEAR,
  payload,
})

export const filterByTitle = (payload) => ({
  type: FILTER_TITLE,
  payload,
})

export const loadData = (payload) => ({
  type: LOAD_DATA,
  payload,
})

const filterItems = (state = initialState, action) => {}

export default filterItems
