import React from 'react'
// import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { lpForm } from 'lp-form'
import {
  Field,
  propTypes as formPropTypes,
} from 'redux-form'
import {
  ButtonArea,
  SubmitButton,
  Textarea,
} from 'lp-components'

const propTypes = {
  ...formPropTypes,
}

const defaultProps = {}

function DayForm ({
  handleSubmit,
  invalid,
  pristine,
  submitting,
}) {
  return (
    <form onSubmit={ handleSubmit }>
      <div className="form-inputs">
        <Field
          name="notes"
          component={ Textarea }
        />
      </div>

      <ButtonArea>
        <SubmitButton { ...{ invalid, pristine, submitting }  } className="button-primary">
          Save
        </SubmitButton>
      </ButtonArea>
    </form>
  )
}

DayForm.propTypes = propTypes
DayForm.defaultProps = defaultProps

export default compose(
  lpForm({
    name: 'day-form',
  }),
)(DayForm)
