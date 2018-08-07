import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Element, scroller } from 'react-scroll'
import { onMount } from 'lp-hoc'
import { selectors } from '../reducer'
import { Header } from 'components'
import { WeekCard } from '../components'
import { getWeekNum } from 'utils'
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
          <Element name={ `week-${i + 1}` } key={ i }>
            <WeekCard
              week={ week }
              weekNum={ i + 1 }
              onExpand={ () => fetchSarahWeek((i + 1), 'SarahSchedule') }
              tableName="SarahSchedule"
              setWeeks={ setWeeks }
            />
          </Element>
        )
      }
    </div>
  )
}

SarahSchedule.propTypes = propTypes
SarahSchedule.defaultProps = defaultProps

function findCurrentWeek () {
  const weekNum = getWeekNum()
  return scroller.scrollTo(`week-${weekNum}`, {
    duration: 1000,
    delay: 50,
    smooth: true,
  })
}

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
  onMount(findCurrentWeek),
)(SarahSchedule)
