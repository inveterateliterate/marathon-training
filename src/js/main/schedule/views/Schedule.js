import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { selectors } from '../reducer'
import { onMount, waitFor, onUnmount } from 'lp-hoc'
import { WeekCard } from '../components'
import * as apiActions from 'api-actions'
import * as actions from '../actions'
import { groupByWeek } from 'utils'

const propTypes = {
  schedule: PropTypes.array.isRequired,
  redirectToSchedule: PropTypes.func.isRequired,
}

const defaultProps = {}

function Schedule ({ schedule, redirectToSchedule }) {
  const recordsByWeek = groupByWeek(schedule)
  return (
    <div>
      <h1>2018 Chicago Marathon Training Schedule</h1>
      <h2>Race Date: October 7 2018</h2>

      <div className="container">
        {
          Object.keys(recordsByWeek).map((week, i) =>
            <WeekCard
              key={ i }
              weekArray={ recordsByWeek[week] }
              weekNum={ week }
              redirectToSchedule={ redirectToSchedule }
            />
          )
        }
      </div>
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
  redirectToSchedule: actions.redirectToSchedule,
  clearSchedule: actions.clearSchedule
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  onMount('fetchSchedule'),
  waitFor('schedule'),
  onUnmount('clearSchedule')
)(Schedule)
