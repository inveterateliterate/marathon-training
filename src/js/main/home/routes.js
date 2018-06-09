import React from 'react'
import { Route, IndexRoute } from 'react-router'
import * as Views from './views'
import Layout from './Layout'

const Routes = (
  <Route component={ Layout }>
    <IndexRoute component={ Views.Home }/>
  </Route>
)

export default Routes
