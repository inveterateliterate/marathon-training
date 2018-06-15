import { handleActions } from 'redux-actions'
import { get } from 'lodash/fp'
import { setFromRequest } from 'lp-redux-api'
import { selectorForSlice, setState, unsetState } from 'lp-redux-utils'
import * as apiActions from 'api-actions'
import * as actions from './actions'

const reducerKey = 'schedule'
const slice = 'root.schedule'

const initialState = {}

const reducer = handleActions({
  ...setFromRequest(apiActions.REQ_SCHEDULE, 'schedule'),
  [actions.setSchedule]: setState('schedule.success', ({ payload: returnedDayRecord }, state) => {
    const schedule = get('schedule.success', state)
    return schedule.map(dayRecordInstance => dayRecordInstance.id === returnedDayRecord.id ? returnedDayRecord : dayRecordInstance)
  }),
  [actions.clearSchedule]: unsetState('schedule')
}, initialState)

const select = selectorForSlice(slice)

const selectors = {
  schedule: select('schedule.success'),
}

export { reducer, selectors, reducerKey }
