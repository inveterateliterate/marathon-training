import PropTypes from 'prop-types'

export const dayRecordFields = PropTypes.shape({
  id: PropTypes.number.isRequired,
  chicagoEnduranceSports: PropTypes.string,
  date: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  halHigdon: PropTypes.string.isRequired,
  other: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  week: PropTypes.string.isRequired,
})

export const dayRecord = PropTypes.shape({
  id: PropTypes.string.isRequired,
  fields: dayRecordFields.isRequired,
})
