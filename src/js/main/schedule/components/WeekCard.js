import React from 'react'
import PropTypes from 'prop-types'
import { toggle, togglePropTypes } from 'lp-hoc'
import classnames from 'classnames'


const propTypes = {
  ...togglePropTypes('expanded'),
}

const defaultProps = {
  expanded: false,
}

function WeekCard ({
  expanded,
  toggleExpanded,
}) {
  return (
    <div className={ classnames('collapsible-container', { expanded }) }>
      <div

        className="collapsible"
      >
      </div>
    </div>
  )
}
