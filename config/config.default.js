'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = {};

  config.view = {
    root: path.join(appInfo.baseDir, 'app/view'),
  };

  return config;
};
