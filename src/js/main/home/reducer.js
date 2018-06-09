import { handleActions } from 'redux-actions'
// import { selectorForSlice } from 'lp-redux-utils'

const reducerKey = 'home'
// const slice = 'root.home'

const initialState = {
  test: 'foo'
}

const reducer = handleActions({}, initialState)

// const select = selectorForSlice(slice)

const selectors = {}

export { reducer, selectors, reducerKey }
