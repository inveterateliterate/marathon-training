import { handleActions } from 'redux-actions'
import { get } from 'lodash/fp'
import { setFromRequest } from 'lp-redux-api'
import { selectorForSlice, setState } from 'lp-redux-utils'
import { range, first } from 'lodash'
import { NUM_WEEKS } from 'config'
import * as apiActions from 'api-actions'
import * as actions from './actions'

const reducerKey = 'schedule'
const slice = 'root.schedule'

const initialState = {
  weeks: range(NUM_WEEKS).map(() => null)
}

const reducer = handleActions({
  ...setFromRequest(apiActions.REQ_WEEK, 'week'),
  [apiActions.REQ_WEEK + '_SUCCESS']: setState('weeks', ({ payload: returnedWeek }, state) => {
    const weekNum = Number(first(returnedWeek).fields.week)
    const weeks = get('weeks', state)
    return weeks.map((week, i) => (i + 1) === weekNum ? returnedWeek : week)
  }),
  [actions.setWeeks]: setState('weeks', ({ payload: returnedDay }, state) => {
    const weeks = get('weeks', state)
    return weeks.map((week, i) => {
      return Number(returnedDay.fields.week) === (i + 1) ? week.map(day => returnedDay.id === day.id ? returnedDay : day) : week
    })
  }),
}, initialState)

const select = selectorForSlice(slice)

const selectors = {
  weeks: select('weeks'),
}

export { reducer, selectors, reducerKey }
