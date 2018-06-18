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
  fetchSarahWeek: PropTypes.func.isRequired,
  setWeeks: PropTypes.func.isRequired,
}

const defaultProps = {}

function SarahSchedule ({ weeks, fetchSarahWeek, setWeeks }) {
  return (
    <div>
      <Header />
      {
        weeks.map((week, i) =>
          <WeekCard
            key={ i }
            week={ week }
            weekNum={ i + 1 }
            onExpand={ () => fetchSarahWeek((i + 1), 'SarahSchedule') }
            tableName="SarahSchedule"
            setWeeks={ setWeeks }
          />
        )
      }
    </div>
  )
}

SarahSchedule.propTypes = propTypes
SarahSchedule.defaultProps = defaultProps

function mapStateToProps (state) {
  return {
    weeks: selectors.weeks(state)
  }
}

const mapDispatchToProps = {
  fetchSarahWeek: apiActions.fetchSarahWeek,
  setWeeks: actions.setWeeks,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(SarahSchedule)
