import React from 'react'
// import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'

const propTypes = {}

const defaultProps = {}

function Schedule () {
  return (
    <div>
      <h1>2018 Chicago Marathon Training Schedule</h1>
      <h2>Race Date: October 7 2018</h2>

      <div className="container">

      </div>
    </div>

  )
}

Schedule.propTypes = propTypes

Schedule.defaultProps = defaultProps

function mapStateToProps () {
  return {}
}

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Schedule)
