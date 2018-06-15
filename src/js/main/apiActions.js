import { requestWithKey } from 'lp-redux-api'

export const REQ_SCHEDULE = 'REQ_SCHEDULE'

export function fetchSchedule () {
  return requestWithKey(REQ_SCHEDULE, {
    url: `/${process.env.API_ENDPOINT}/Schedule?view=viwt1WOG8hR71EX9q`
  })
}

export function fetchSarahSchedule () {
  return requestWithKey(REQ_SCHEDULE, {
    url: `/${process.env.API_ENDPOINT}/SarahSchedule?view=viw0ypJ98ne5lqm80`
  })
}
