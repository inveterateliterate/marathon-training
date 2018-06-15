import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'

export function redirectToSchedule () {
  return push('/')
}

export const setSchedule = createAction('SET_SCHEDULE')
export const clearSchedule = createAction('CLEAR_SCHEDULE')

export const setSarahSchedule = createAction('SET_SARAH_SCHEDULE')
export const clearSarahSchedule = createAction('CLEAR_SARAH_SCHEDULE')
