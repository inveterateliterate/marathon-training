import React from 'react'
// import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'

const propTypes = {}

const defaultProps = {}

function Home () {
  return (
    <div>
      <h1> Hello world! </h1>
      <p>
        This is the home view. You can change what's rendered here by editing the file: <b>src/js/main/home/views/Home.js</b>
      </p>
    </div>
  )
}

Home.propTypes = propTypes

Home.defaultProps = defaultProps

function mapStateToProps () {
  return {}
}

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Home)
