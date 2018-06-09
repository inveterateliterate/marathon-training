const express = require('express')
const path = require('path')
const enforceSSL = require('express-enforces-ssl')

const {
  PORT=8080,
  NODE_ENV='development',
} = process.env

const app = express()

// Enforce https connections in production
if (NODE_ENV === 'production') {
  app.enable('trust proxy')
  app.use(enforceSSL())
}

// Use build folder for static files
app.use(express.static('build'))

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
