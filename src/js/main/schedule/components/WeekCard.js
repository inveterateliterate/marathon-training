import React from 'react'
// import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { toggle, togglePropTypes } from 'lp-hoc'
import classnames from 'classnames'
import WeekSummary from './WeekSummary'


const propTypes = {
  ...togglePropTypes('expanded'),
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
      <div
        style={{ cursor: 'pointer'} }
        onClick={ toggleExpanded }
        className="collapsible"
      >
        Week { weekNum }
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
    </div>
  )
}


WeekCard.propTypes = propTypes
WeekCard.defaultProps = defaultProps

export default compose(
  toggle('expanded')
)(WeekCard)
