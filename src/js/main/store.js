import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'
import { reducer as modalReducer } from 'redux-modal'
import {
  reducer as sessionsReducer,
  enhancer as sessionsEnhancer,
} from 'redux-sessions'
import { middleware as apiMiddleware } from 'api'
import { reducer as apiReducer } from 'lp-redux-api'
import { reducer as flashReducer, middleware as flashMiddleware } from 'redux-flash'
import { reducer as rootReducer, reducerKey as rootKey } from './reducer'
import history from 'browser-history'

function initializeStore () {
  // Combine the reducers into one that Redux can handle.
  // The keys below are important, as data in the store will be namespaced by them
  // and each reducer only receives the slice of state according to the key.
  const reducer = combineReducers({
    form: formReducer,
    modal: modalReducer,
    [rootKey]: rootReducer,
    // routing: routerReducer,
    router: connectRouter(history),
    api: apiReducer,
    flash: flashReducer,
    sessions: sessionsReducer,
  })
  // Add support for the Redux Dev Tools in chrome.
  const devToolCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const composeEnhancers = (process.env.NODE_ENV !== 'production') ? devToolCompose : compose
  // Combine the middlewares into one so Redux can handle
  const enhancers = composeEnhancers(
    applyMiddleware(
      apiMiddleware,
      thunkMiddleware,
      flashMiddleware(),
      routerMiddleware(history)
    ),
    sessionsEnhancer(),
  )
  const initialState = {}
  return createStore(connectRouter(history)(reducer), initialState, enhancers)
}

const store = initializeStore()

window.store = store

export default window.store
