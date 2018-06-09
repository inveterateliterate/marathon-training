import Raven from 'raven-js'

const { NODE_ENV, SENTRY_URL } = process.env

/* eslint-disable no-console */

function init () {
  if (Raven.isSetup()) return
  if (!SENTRY_URL) return console.warn('WARNING: Sentry not configured. "SENTRY_URL" environment variable must be defined.')
  try {
    Raven.config(SENTRY_URL, {
      environment: NODE_ENV,
      shouldSendCallback: () => NODE_ENV === 'production',
    }).install()
  } catch (e) {
    console.warn(`WARNING: Sentry intialization failed: ${ e }`)
  }
}

init()

export function logException (err, context) {
  if (!Raven.isSetup()) return
  return Raven.captureException(err, { extra: context })
}
