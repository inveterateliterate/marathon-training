import React from 'react'
import { Route, IndexRoute } from 'react-router'
import * as Views from './views'
import Layout from './Layout'
import { SARAH_SCHEDULE_ROUTE, REFERENCES_ROUTE } from 'config'

const Routes = (
  <Route component={ Layout }>
    <IndexRoute component={ Views.Schedule }/>
    <Route path={ SARAH_SCHEDULE_ROUTE } component={ Views.SarahSchedule } />
    <Route path={ REFERENCES_ROUTE } component={ Views.References } />
  </Route>
)

export default Routes
