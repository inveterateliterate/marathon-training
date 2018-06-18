import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { selectors } from '../reducer'
import { Header } from 'components'
import { WeekCard } from '../components'
import * as apiActions from 'api-actions'
import * as actions from '../actions'

const propTypes = {
  weeks: PropTypes.array.isRequired,
  fetchWeek: PropTypes.func.isRequired,
  setWeeks: PropTypes.func.isRequired,
}

const defaultProps = {}

function Schedule ({ weeks, fetchWeek, setWeeks }) {
  return (
    <div>
      <Header />
      {
        weeks.map((week, i) =>
          <WeekCard
            key={ i }
            week={ week }
            weekNum={ i + 1 }
            onExpand={ () => fetchWeek((i + 1), 'Schedule') }
            tableName="Schedule"
            setWeeks={ setWeeks }
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
    weeks: selectors.weeks(state)
  }
}

const mapDispatchToProps = {
  fetchWeek: apiActions.fetchWeek,
  setWeeks: actions.setWeeks,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Schedule)
