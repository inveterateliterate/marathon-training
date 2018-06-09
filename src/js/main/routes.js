import React from 'react'
import { Route, Router, browserHistory } from 'react-router'
import initializeStore from './store'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import Layout from './Layout'
import { routes as HomeRoutes } from './home'

const store = initializeStore()

// Make the routing information available in the store
const history = syncHistoryWithStore(browserHistory, store)

const Routes = (
  // React Redux `Provider` component to enable the `connect` function to connect to the Redux store.
  <Provider store={ store }>
    <Router history={ history } >
      <Route path="/" component={ Layout }>
      { HomeRoutes }
      </Route>
    </Router>
  </Provider>
)

export default Routes
