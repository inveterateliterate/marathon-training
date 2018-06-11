import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { toggle, togglePropTypes, onMount } from 'lp-hoc'
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
      notes,
    },
    id: recordId,
  },
    statusButton,
    toggleStatusButton,
}) {
  return (
    <div className="panel">
      <div className="row">
        <div className="col-7">
          <b className="weekday">{ moment(date).format('dddd, MMMM Do') }</b>
        </div>
        <div className="col-5">
          <button
            className={ classnames('button', `button-${statusButton ? 'success' : 'warn'}`, 'button-small') }
            onClick={
              () => {
                effects.updateSatus(recordId, !statusButton ? options.statusCopy.COMPLETE : options.statusCopy.INCOMPLETE)
                toggleStatusButton()
              }
            }
          >
            { statusButton ? options.statusCopy.COMPLETE : options.statusCopy.INCOMPLETE }
          </button>
        </div>
      </div>
      <div className="summary">
        <p><b>Hal Higdon:</b> { halHigdon }</p>
        <p><b>CES:</b> { cES }</p>
        <p><b>Other:</b> { other }</p>
      </div>
      <DayForm
        initialValues={ { notes } }
        onSubmit={ params => effects.updateDay(recordId, params) }
        name={ `day-form-${recordId}` }
      />
      <hr/>
    </div>
  )
}

WeekSummary.propTypes = propTypes
WeekSummary.defaultProps = defaultProps

function modify ({ dayRecord, setStatusButton }) {
  const statusBool = options.statusValues[dayRecord.fields.status]
  return setStatusButton(statusBool)
}

export default compose(
  toggle('statusButton'),
  onMount(modify),
)(WeekSummary)

