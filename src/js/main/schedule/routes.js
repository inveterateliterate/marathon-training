import React from 'react'
import { Route, IndexRoute } from 'react-router'
import * as Views from './views'
import Layout from './Layout'

const Routes = (
  <Route path="schedule" component={ Layout }>
    <IndexRoute component={ Views.Schedule }/>
  </Route>
)

export default Routes
