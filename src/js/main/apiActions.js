import { requestWithKey } from 'lp-redux-api'

const { API_ENDPOINT } = process.env

export const REQ_SCHEDULE = 'REQ_SCHEDULE'

export function fetchSchedule () {
  return requestWithKey(REQ_SCHEDULE, {
    url: `/${API_ENDPOINT}/Schedule?view=viwt1WOG8hR71EX9q`
  })
}

export function fetchSarahSchedule () {
  return requestWithKey(REQ_SCHEDULE, {
    url: `/${API_ENDPOINT}/SarahSchedule?view=viw0ypJ98ne5lqm80`
  })
}
