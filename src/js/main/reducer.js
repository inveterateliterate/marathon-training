import { combineReducers } from 'redux'
import {
  reducer as homeReducer,
  reducerKey as homeReducerKey,
} from './home'

const reducerKey = 'root'

const reducer = combineReducers({
  [homeReducerKey]: homeReducer,
})

export { reducer, reducerKey }
