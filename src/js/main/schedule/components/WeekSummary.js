import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { toggle, togglePropTypes, modifyProps } from 'lp-hoc'
import moment from 'moment'
import classnames from 'classnames'
import { DayForm } from '../forms'
// import * as Types from 'types'
import * as effects from 'effects'
import * as options from 'options'

const propTypes = {
  ...togglePropTypes('statusButton'),
  dayRecord: PropTypes.object.isRequired,
}

const defaultProps = {}

function WeekSummary ({
  dayRecord: {
    fields: {
      cES,
      date,
      halHigdon,
      other,
      status,
      notes,
    },
    id: recordId,
  },
    statusButton,
    toggleStatusButton,
    setStatusButton,
}) {
  // setStatusButton(options.statusValues[status])
  return (
    <div>
      <b>{ moment(date).format('dddd, MMMM Do YYYY') }</b>
      <br/>
      <button
        className={ classnames('button', `button-${statusButton ? 'success' : 'warn'}`, 'button-medium') }
        onClick={
          () => {
            toggleStatusButton()
            effects.updateSatus(recordId, !statusButton ? options.statusCopy.COMPLETE : options.statusCopy.INCOMPLETE)
          }
        }
      >
        { statusButton ? options.statusCopy.COMPLETE : options.statusCopy.INCOMPLETE }
      </button>
      <br/>
      <b>Hal Higdon:</b><p>{ halHigdon }</p>
      <br/>
      <b>CES:</b><p>{ cES }</p>
      <br/>
      <b>Other:</b><p>{ other }</p>
      <DayForm
        initialValues={ { notes } }
        onSubmit={ params => effects.updateDay(recordId, params) }
      />
    </div>
  )
}

WeekSummary.propTypes = propTypes
WeekSummary.defaultProps = defaultProps

function modify ({ dayRecord }) {
  return {
    statusButton: options.statusValues[dayRecord.fields.status]
  }
}

export default compose(
  // onMount?
  modifyProps(modify),
  toggle('statusButton'),
)(WeekSummary)

