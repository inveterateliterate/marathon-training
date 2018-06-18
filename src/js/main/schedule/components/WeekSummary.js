import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { modifyProps } from 'lp-hoc'
import moment from 'moment'
import classnames from 'classnames'
import { DayForm } from '../forms'
import * as Types from 'types'
import * as effects from 'effects'
import * as options from 'options'

const propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  dayRecord: Types.dayRecord.isRequired,
  setWeeks: PropTypes.func.isRequired,
  tableName: PropTypes.string.isRequired,
}

const defaultProps = {}

function WeekSummary ({
  dayRecord: {
    fields: {
      chicagoEnduranceSports,
      date,
      halHigdon,
      other,
      notes,
    },
    id: recordId,
  },
    isCompleted,
    setWeeks,
    tableName,
}) {
  return (
    <div className="panel">
      <div className="row">
        <div className="col-7">
          <b className="weekday">{ moment(date).format('dddd, MMMM Do') }</b>
        </div>
        <div className="col-5">
          <button
            className={ classnames('button', (isCompleted ? 'button-success' : 'button-warn'), 'button-small') }
            onClick={
              () => {
                effects.updateSatus(recordId, tableName, !isCompleted ? options.statusCopy.COMPLETE : options.statusCopy.INCOMPLETE)
                .then(setWeeks)
              }
            }
          >
            { isCompleted ? options.statusCopy.COMPLETE : options.statusCopy.INCOMPLETE }
          </button>
        </div>
      </div>
      <div className="summary">
        <p><b>Hal Higdon:</b> { halHigdon }</p>
        {
          chicagoEnduranceSports &&
          <p><b>CES:</b> { chicagoEnduranceSports }</p>
        }
        <p><b>Other:</b> { other }</p>
      </div>
      <DayForm
        initialValues={ { notes } }
        onSubmit={ params => effects.updateDay(recordId, tableName, params) }
        name={ `day-form-${recordId}` }
      />
      <hr/>
    </div>
  )
}

WeekSummary.propTypes = propTypes
WeekSummary.defaultProps = defaultProps

function modify ({ dayRecord }) {
  return {
    isCompleted: options.statusValues[dayRecord.fields.status]
  }
}

export default compose(
  modifyProps(modify),
)(WeekSummary)

