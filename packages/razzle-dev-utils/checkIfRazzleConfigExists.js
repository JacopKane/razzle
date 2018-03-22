'use strict';

const fs = require('fs');
const logger = require('razzle-dev-utils/logger');

// Check for razzle.config.js file
module.exports = function(appRazzleConfigPath) {
  try {
    return fs.existsSync(appRazzleConfigPath) ? true : false;
  } catch (error) {
    logger.error(
      'There was a problem while checking razzle.config.js file.',
      error
    );
    return false;
  }
};
