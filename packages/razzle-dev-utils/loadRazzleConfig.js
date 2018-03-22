'use strict';

const logger = require('razzle-dev-utils-temp/logger');
const clearConsole = require('react-dev-utils/clearConsole');

module.exports = function(appRazzleConfigPath, shouldClearConsole) {
  try {
    return require(appRazzleConfigPath);
  } catch (error) {
    if (shouldClearConsole === true) {
      clearConsole();
    }
    logger.error('Invalid razzle.config.js file.', error);
    process.exit(1);
  }
};
