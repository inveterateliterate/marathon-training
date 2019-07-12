import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import Layout from './Layout'
import { routes as ScheduleRoutes } from './schedule'
import history from 'browser-history'
import store from './store'

function Routes () {
  return (
  // React Redux `Provider` component to enable the `connect` function to connect to the Redux store.
    <Provider store={ store }>
      <ConnectedRouter history={ history } >
        <Layout>
          <Switch>
            <Route path="/" component={ ScheduleRoutes }>
            </Route>
          </Switch>
        </Layout>
      </ConnectedRouter>
    </Provider>
  )
}

export default Routes
