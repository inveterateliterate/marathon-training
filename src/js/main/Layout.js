import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { getFlashMessages, flashMessageType } from 'redux-flash'
import { FlashMessageContainer } from 'lp-components'

const propTypes = {
  flashMessages: PropTypes.arrayOf(flashMessageType).isRequired,
  children: PropTypes.node.isRequired,
}

const defaultProps = {}

function Layout ({ flashMessages, children }) {
  return (
    <div>
      <FlashMessageContainer messages={ flashMessages } />
      { children }
    </div>
  )
}

Layout.propTypes = propTypes
Layout.defaultProps = defaultProps

function mapStateToProps (state) {
  return {
    flashMessages: getFlashMessages(state),
  }
}

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Layout)
