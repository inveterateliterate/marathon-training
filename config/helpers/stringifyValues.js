const { mapValues } = require('lodash')

function stringifyValues (obj) {
  return mapValues(obj, JSON.stringify)
}

module.exports = stringifyValues