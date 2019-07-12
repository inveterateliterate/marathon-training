const express = require('express')
const path = require('path')
const enforceSSL = require('express-enforces-ssl')
const { loadEnv, loadPublicEnv } = require('./config/env')
const exposeEnvMiddleware = require('expose-env-middleware')
const compression = require('compression')
const proxy = require('http-proxy-middleware')

loadEnv()

const {
  PORT=8080,
  NODE_ENV='development',
  API_HOST,
  API_TOKEN,
} = process.env

const app = express()

// Enforce https connections in production
if (NODE_ENV === 'production') {
  app.enable('trust proxy')
  app.use(enforceSSL())

  // Enable gzip compression to decrease response body size to increase speed
  app.use(compression())
}

// Use build folder for static files
app.use(express.static('build'))

// use proxy for third-party APIs
// app.use('/v0', proxy({
//   target: API_HOST,
//   changeOrigin: true,
//   headers: { Authorization: `Bearer ${API_TOKEN}` },
//   secure: true,
//   ignorePath: true,
// }))

// Expose env variables to JS code
app.get('/env', exposeEnvMiddleware(loadPublicEnv))

// Send main index file for every request
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/build/index.html')))

// Start server
const server = app.listen(PORT, () => console.log(`Express server listening on port ${ PORT }`))

// Pretty format port-in-use error
server.on('error', e => {
  if (e.code === 'EADDRINUSE') {
    console.log(`Port ${ PORT } is already in use!`)
    process.exit(1)
  }
})
