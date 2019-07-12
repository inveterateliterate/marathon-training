import { configureApi, http } from 'lp-requests'
import { middleware as configureMiddleware } from 'lp-redux-api'

// Configure middleware and api services

export const { API_HOST, API_ENDPOINT, API_TOKEN } = process.env
export const API_URL = API_HOST + '/' + API_ENDPOINT

function before () {
  return {
    headers: { Authorization: `Bearer ${API_TOKEN}` }
  }
}

export const config = {
  root: API_URL,
  mode: 'cors',
  before,
  successDataPath: 'records',
}

const baseApi = configureApi(config)
export const middleware = configureMiddleware(http, config)
export const api = configureApi({ before }, baseApi)
