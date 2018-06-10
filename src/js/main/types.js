import PropTypes from 'prop-types'

export const dayRecordFields = PropTypes.shape({
  iD: PropTypes.number.isRequired,
  cES: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  halHigdon: PropTypes.string.isRequired,
  other: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  week: PropTypes.string.isRequired,
})
