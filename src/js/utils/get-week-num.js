import { START_DATE } from 'config'

function getWeekNum () {
  const timeDiff = Math.abs(START_DATE - (new Date()))
  const diffWeeks = Math.ceil(timeDiff / (1000 * 3600 * 24 * 7))
  return diffWeeks
}

export default getWeekNum
