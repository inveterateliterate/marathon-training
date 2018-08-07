import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { toggle, togglePropTypes } from 'lp-hoc'
import FontAwesomeIcon from 'react-fontawesome'
import { faPlus, faMinus } from 'fontawesome-solid'
import classnames from 'classnames'
import WeekSummary from './WeekSummary'
import * as Types from 'types'

const propTypes = {
  ...togglePropTypes('expanded'),
  week: PropTypes.arrayOf(Types.dayRecord),
  tableName: PropTypes.string.isRequired,
  weekNum: PropTypes.number.isRequired,
  onExpand: PropTypes.func.isRequired,
  setWeeks: PropTypes.func.isRequired,
}

const defaultProps = {}

function WeekCard ({
  week,
  weekNum,
  tableName,
  expanded,
  toggleExpanded,
  onExpand,
  setWeeks,
}) {
  return (
    <div className={ classnames('collapsible-container', 'card', { expanded }) }>
      <div className="row">
        <div className="col-9">
          <h3>Week { weekNum }</h3>
        </div>
        <div className="col-3">
          <FontAwesomeIcon
            icon={ expanded ? faMinus : faPlus }
            style={ { cursor: 'pointer', color: '#A9A9A9' } }
            onClick={ () => {
              toggleExpanded()
              onExpand()
            } }
            className="collapsible"
          />
        </div>
      </div>
      {
        expanded &&
        week &&
        week.map((day, i) =>
          <WeekSummary
            key={ i }
            dayRecord={ day }
            tableName={ tableName }
            setWeeks={ setWeeks }
          />
        )
      }
    </div>
  )
}

WeekCard.propTypes = propTypes
WeekCard.defaultProps = defaultProps

export default compose(
  toggle('expanded'),
)(WeekCard)
