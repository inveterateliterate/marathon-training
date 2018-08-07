import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { selectors } from '../main/schedule/reducer'
import * as actions from '../main/schedule/actions'
import PropTypes from 'prop-types'
import { onMount } from 'lp-hoc'
import { formatTimeDiff } from 'utils'
import { RACE_DATE } from 'config'

const propTypes = {
  timeLeft: PropTypes.object,
}

const defaultProps = {}

function CountdownTimer ({
  timeLeft: {
    weeks,
    days,
    hours,
    minutes,
    seconds,
  },
}) {
  return (
    <ul>
      <li>{ weeks } weeks</li>
      <li>{ days } days</li>
      <li>{ hours } hours</li>
      <li>{ minutes } minutes</li>
      <li>{ seconds } seconds</li>
    </ul>
  )
}

CountdownTimer.propTypes = propTypes
CountdownTimer.defaultProps = defaultProps


function startTimer ({ setTimeLeft }) {
  setInterval(() => {
    const timeDiff = RACE_DATE - new Date()
    setTimeLeft(formatTimeDiff(timeDiff))
  }, 1000)
}

// function stopTimer () {
    // clearInterval(this.interval);
// }

function mapStateToProps (state) {
  return {
    timeLeft: selectors.timeLeft(state)
  }
}

const mapDispatchToProps = {
  setTimeLeft: actions.setTimeLeft,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  onMount(startTimer),
  // onUnmount(stopTimer),
)(CountdownTimer)


