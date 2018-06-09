import { requestWithKey } from 'lp-redux-api'

export const REQ_SCHEDULE = 'REQ_SCHEDULE'

export function fetchSchedule () {
  return requestWithKey(REQ_SCHEDULE, {
    url: process.env.API_ENDPOINT
  })
}
