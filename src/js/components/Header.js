import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router'
import { NavLink } from 'lp-components'
import { IFAT_SCHEDULE_ROUTE, SARAH_SCHEDULE_ROUTE, REFERENCES_ROUTE } from 'config'
import CountdownTimer from './CountdownTimer'

const propTypes = {}

const defaultProps = {}

function Header () {
  return (
    <header className="header-block-container">
      <div className="navigation">
        <h2>2019 Berlin Marathon Training Schedule</h2>
        <h1>Race Date:</h1>
        <h1>September 29, 2019</h1>
        <CountdownTimer />
        {/*}
        <ul className="nav">
          <li>
            <NavLink to={ IFAT_SCHEDULE_ROUTE }>Ifat</NavLink>
          </li>
          <li>
            <NavLink to={ SARAH_SCHEDULE_ROUTE }>Sarah</NavLink>
          </li>
          <li>
            <NavLink to={ REFERENCES_ROUTE }>References</NavLink>
          </li>
        </ul>
      */}
      </div>
    </header>
  )
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
