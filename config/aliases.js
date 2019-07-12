// Webpack aliases

const path = require('path')

function aliases (basePath) {
  const to = relPath => path.join(basePath, relPath)
  return {
    // Local
    'api-actions': to('js/main/apiActions'),
    'components': to('js/components'),
    'config': to('js/config'),
    'effects': to('js/main/effects'),
    'images': to('images'),
    'options': to('js/main/options'),
    'store': to('js/main/store'),
    'reducer': to('js/main/reducer'),
    'types': to('js/main/types'),
    'utils': to('js/utils'),
    // Services
    'api': to('js/services/api'),
    'browser-history': to('js/services/browserHistory'),
    'local-storage': to('js/services/localStorage'),
    // Modules
    'fontawesome': '@fortawesome/fontawesome',
    'fontawesome-solid': '@fortawesome/fontawesome-free-solid',
    'react-fontawesome': '@fortawesome/react-fontawesome',
    'lp-components': '@launchpadlab/lp-components',
    'lp-form': '@launchpadlab/lp-form',
    'lp-redux-api': '@launchpadlab/lp-redux-api',
    'lp-requests': '@launchpadlab/lp-requests',
    'lp-hoc': '@launchpadlab/lp-hoc',
    'lp-redux-utils': '@launchpadlab/lp-redux-utils',
  }
}

module.exports = aliases
