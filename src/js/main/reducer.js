import { combineReducers } from 'redux'
import {
  reducer as scheduleReducer,
  reducerKey as scheduleReducerKey,
} from './schedule'

const reducerKey = 'root'

const reducer = combineReducers({
  [scheduleReducerKey]: scheduleReducer,
})

export { reducer, reducerKey }
