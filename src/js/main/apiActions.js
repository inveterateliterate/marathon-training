import { requestWithKey } from 'lp-redux-api'

export const REQ_WEEK = 'REQ_WEEK'

export function fetchWeek (weekNum, tableName) {
  return requestWithKey(REQ_WEEK, {
    url: `/${tableName}?filterByFormula=%7Bweek%7D%3D%22${weekNum}%22&view=viwt1WOG8hR71EX9q`,
    // put back as query string when upgade lp-requests
  })
}

export function fetchSarahWeek (weekNum, tableName) {
  return requestWithKey(REQ_WEEK, {
    url: `/${tableName}?filterByFormula=%7Bweek%7D%3D%22${weekNum}%22&view=viw0ypJ98ne5lqm80`,
    // put back as query string when upgade lp-requests
  })
}

// export function fetchSchedule () {
//   return requestWithKey(REQ_WEEKS, {
//     url: '/Schedule',
//     query: {
//       view: 'viwt1WOG8hR71EX9q'
//     }
//   })
// }
