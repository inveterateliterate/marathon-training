// Webpack aliases

const path = require('path')

function aliases (basePath) {
  const to = relPath => path.join(basePath, relPath)
  return {
    // Local
    'api': to('js/services/api'),
    'api-actions': to('js/main/apiActions'),
    'auth': to('js/services/auth'),
    'components': to('js/components'),
    'config': to('js/config'),
    'effects': to('js/main/effects'),
    'images': to('images'),
    'local-storage': to('js/services/localStorage'),
    'reducer': to('js/main/reducer'),
    'sentry': to('js/services/sentry'),
    'types': to('js/main/types'),
    'utils': to('js/utils'),
    // Modules
    'lp-components': '@launchpadlab/lp-components',
    'lp-form': '@launchpadlab/lp-form',
    'lp-redux-api': '@launchpadlab/lp-redux-api',
    'lp-requests': '@launchpadlab/lp-requests',
    'lp-hoc': '@launchpadlab/lp-hoc',
    'lp-redux-utils': '@launchpadlab/lp-redux-utils',
  }
}

module.exports = aliases