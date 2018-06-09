import { handleActions } from 'redux-actions'
import { setFromRequest } from 'lp-redux-api'
import { selectorForSlice, unsetState } from 'lp-redux-utils'
import * as apiActions from 'api-actions'
import * as actions from './actions'

const reducerKey = 'schedule'
const slice = 'root.schedule'

const initialState = {}

const reducer = handleActions({
  ...setFromRequest(apiActions.REQ_SCHEDULE, 'schedule'),
  [actions.clearSchedule]: unsetState('schedule')
}, initialState)

const select = selectorForSlice(slice)

const selectors = {
  schedule: select('schedule.success')
}

export { reducer, selectors, reducerKey }
