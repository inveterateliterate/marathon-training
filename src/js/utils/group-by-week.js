import { groupBy } from 'lodash'

function groupByWeek (records) {
  return groupBy(records, 'fields.week')
}

export default groupByWeek
