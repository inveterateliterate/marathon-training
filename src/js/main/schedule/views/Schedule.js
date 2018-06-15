import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { selectors } from '../reducer'
import { onMount, waitFor, onUnmount } from 'lp-hoc'
import { Header } from 'components'
import { WeekCard } from '../components'
import * as apiActions from 'api-actions'
import * as actions from '../actions'
import { groupByWeek } from 'utils'

const propTypes = {
  schedule: PropTypes.array.isRequired,
  setSchedule: PropTypes.func.isRequired,
}

const defaultProps = {}

function Schedule ({ schedule, setSchedule }) {
  const recordsByWeek = groupByWeek(schedule)
  return (
    <div >
      <Header />
      {
        Object.keys(recordsByWeek).map((week, i) =>
          <WeekCard
            key={ i }
            weekArray={ recordsByWeek[week] }
            weekNum={ week }
            setSchedule={ setSchedule }
            tableName="Schedule"
          />
        )
      }
    </div>

  )
}

Schedule.propTypes = propTypes
Schedule.defaultProps = defaultProps

function mapStateToProps (state) {
  return {
    schedule: selectors.schedule(state)
  }
}

const mapDispatchToProps = {
  fetchSchedule: apiActions.fetchSchedule,
  clearSchedule: actions.clearSchedule,
  setSchedule: actions.setSchedule,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  onMount('fetchSchedule'),
  waitFor('schedule'),
  onUnmount('clearSchedule')
)(Schedule)
