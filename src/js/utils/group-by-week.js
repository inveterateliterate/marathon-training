import { groupBy } from 'lodash'

function groupByWeek (records) {
  const fields = records.map(record => record.fields)
  return groupBy(fields, 'week')
}

export default groupByWeek
