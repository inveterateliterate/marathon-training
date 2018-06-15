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
  redirectToSchedule: PropTypes.func,
}

const defaultProps = {
  expanded: false,
}

function WeekCard ({
  weekArray,
  weekNum,
  expanded,
  toggleExpanded,
  setSchedule,
  tableName,
}) {
  return (
    <div >
      <div className={ classnames('collapsible-container', 'card', { expanded }) }>
        <div className="row">
          <div className="col-9">
            <h3>Week { weekNum }</h3>
          </div>
          <div className="col-3">
              <FontAwesomeIcon
                icon={ expanded ? faMinus : faPlus }
                style={ { cursor: 'pointer', color: '#A9A9A9' } }
                onClick={ toggleExpanded }
                className="collapsible"
              />
          </div>
        </div>
        {
          expanded &&
          weekArray.map((day, i) =>
            <WeekSummary
              key={ i }
              dayRecord={ day }
              setSchedule={ setSchedule }
              tableName={ tableName }
            />
          )
        }
      </div>
    </div>
  )
}


WeekCard.propTypes = propTypes
WeekCard.defaultProps = defaultProps

export default compose(
  toggle('expanded')
)(WeekCard)
