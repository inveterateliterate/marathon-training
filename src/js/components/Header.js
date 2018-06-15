import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { SARAH_SCHEDULE_ROUTE, REFERENCES_ROUTE } from 'config'

const propTypes = {}

const defaultProps = {}

function Header () {
  return (
    <div >
      <header className="header-block-container">
        <h1>2018 Chicago Marathon Training Schedule</h1>
        <h2>Race Date: October 7 2018</h2>
        <ul>
          <li>
            <Link to="/">Ifat</Link>
          </li>
          <li>
            <Link to={SARAH_SCHEDULE_ROUTE}>Sarah</Link>
          </li>
          <li>
            <Link to={REFERENCES_ROUTE}>References</Link>
          </li>
        </ul>

      </header>
    </div>
  )
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
