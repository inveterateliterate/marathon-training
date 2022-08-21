// import { requestWithKey } from 'lp-redux-api'
import { createRequest, } from 'lp-redux-api'

export const REQ_WEEK = 'REQ_WEEK'

export const fetchWeek = createRequest('FETCH_WEEK',
  (tableName, weekNum) => ({
    url: `/tblMmk7kJK8BdhrbT?filterByFormula=%7Bweek%7D%3D%22${weekNum}%22&view=viwcWy23Ca33rNmph`
  })
)

export const fetchSarahWeek = createRequest('FETCH_WEEK',
  (tableName, weekNum) => ({
    url: `/${tableName}?filterByFormula=%7Bweek%7D%3D%22${weekNum}%22&view=viw0ypJ98ne5lqm80`,
  })
)
