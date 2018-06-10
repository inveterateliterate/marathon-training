import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { toggle, togglePropTypes } from 'lp-hoc'
import FontAwesomeIcon from 'react-fontawesome'
import { faPlus, faMinus } from 'fontawesome-solid'
import classnames from 'classnames'
import WeekSummary from './WeekSummary'

const propTypes = {
  ...togglePropTypes('expanded'),
  redirectToSchedule: PropTypes.func.isRequired,
}

const defaultProps = {
  expanded: false,
}

function WeekCard ({
  weekArray,
  weekNum,
  expanded,
  toggleExpanded,
}) {
  return (
    <div className={ classnames('collapsible-container', { expanded }) }>
      <FontAwesomeIcon
        icon={ expanded ? faMinus : faPlus }
        style={ { cursor: 'pointer', color: '#A9A9A9' } }
        onClick={ toggleExpanded }
        className="collapsible"
      />
      <h3>Week { weekNum }</h3>
      {
        expanded &&
        weekArray.map((day, i) =>
          <WeekSummary
            key={ i }
            dayRecord={ day }
          />
        )
      }
    </div>
  )
}


WeekCard.propTypes = propTypes
WeekCard.defaultProps = defaultProps

export default compose(
  toggle('expanded')
)(WeekCard)
