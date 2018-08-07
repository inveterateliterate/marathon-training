import { CHICAGO_OFFSET } from 'config'

function formatTimeDiff (timeDiff) {
  const diff = timeDiff + chicagoOffsetDiff()
  const totals = {
    seconds: diff / 1000,
    minutes: diff / (1000 * 60),
    hours: diff / (1000 * 60 * 60),
    days: diff / (1000 * 60 * 60 * 24),
    weeks: diff / (1000 * 60 * 60 * 24 * 7),
  }
  const weeks = Math.floor(totals.weeks)
  const days = Math.floor(totals.days % 7)
  const hours = Math.floor(totals.hours % (Math.floor(totals.days)))
  const minutes = Math.floor(totals.minutes % (Math.floor(totals.hours)))
  const seconds = Math.floor(totals.seconds % (Math.floor(totals.minutes)))

  const remainders = {
    weeks: weeks,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
  return remainders
}

function chicagoOffsetDiff () {
  const date = new Date()
  const localOffset = date.getTimezoneOffset()
  // assume Chicago offset is 5 * 60 = 300
  const offsetDiff = CHICAGO_OFFSET - localOffset
  return offsetDiff * 60000
}

export default formatTimeDiff
