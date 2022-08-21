import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router'
import * as Views from './views'
import Layout from './Layout'
import {
  IFAT_SCHEDULE_ROUTE,
  SARAH_SCHEDULE_ROUTE,
  REFERENCES_ROUTE
} from 'config'

const propTypes = {
  match: PropTypes.object.isRequired,
}

const defaultProps = {}

function Routes ({ match: { path } }) {
  return(
    <Layout>
      <Switch>
        <Route component={ Layout }>
          <Route path={ path + '/' } component={ Views.Schedule } />
          <Route path={ path + IFAT_SCHEDULE_ROUTE } component={ Views.Schedule } />
          <Route path={ path + SARAH_SCHEDULE_ROUTE } component={ Views.SarahSchedule } />
          <Route path={ path + REFERENCES_ROUTE } component={ Views.References } />
        </Route>
      </Switch>
    </Layout>
  )
}

Routes.propTypes = propTypes
Routes.defaultProps = defaultProps

export default Routes
