import React from 'react'
// import PropTypes from 'prop-types'
import moment from 'moment'
import classnames from 'classnames'
import * as Types from 'types'
import * as options from 'options'

const propTypes = {
  dayRecord: Types.dayRecord.isRequired,
}

const defaultProps = {}

function WeekSummary ({
  dayRecord: {
    cES,
    date,
    halHigdon,
    other,
    status,
  }
}) {
  const statusButton = status == options.statuses.COMPLETE ? 'success' : 'warn'
  return (
    <div>
      <b>{ moment(date).format('dddd, MMMM Do YYYY') }</b>
      <br/>
      <p
        className={ classnames('button', `button-${statusButton}`, 'button-medium') }
      >
        { status }
      </p>
      <br/>
      <b>Hal Higdon:</b><p>{ halHigdon }</p>
      <br/>
      <b>CES:</b><p>{ cES }</p>
      <br/>
      <b>Other:</b><p>{ other }</p>
    </div>
  )
}

WeekSummary.propTypes = propTypes
WeekSummary.defaultProps = defaultProps

export default WeekSummary
