import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router'
import { NavLink } from 'lp-components'
import { SARAH_SCHEDULE_ROUTE, REFERENCES_ROUTE } from 'config'

const propTypes = {}

const defaultProps = {}

function Header () {
  return (
    <header className="header-block-container">
      <div className="navigation">
        <h2>2018 Chicago Marathon Training Schedule</h2>
        <h1>Race Date: October 7 2018</h1>
        <ul className="nav">
          <li>
            <NavLink to="/">Ifat</NavLink>
          </li>
          <li>
            <NavLink to={ SARAH_SCHEDULE_ROUTE }>Sarah</NavLink>
          </li>
          <li>
            <NavLink to={ REFERENCES_ROUTE }>References</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
