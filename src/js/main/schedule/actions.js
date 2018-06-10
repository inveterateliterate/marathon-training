import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'

export function redirectToSchedule () {
  return push('/')
}

export const clearSchedule = createAction('CLEAR_SCHEDULE')
