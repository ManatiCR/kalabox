'use strict';

/**
 * This contains all the core commands that kalabox can run on every machine
 */

module.exports = function(kbox) {

  require('./tasks/apps.js')(kbox);
  require('./tasks/config.js')(kbox);
  require('./tasks/containers.js')(kbox);
  require('./tasks/destroy.js')(kbox);
  require('./tasks/rebuild.js')(kbox);
  require('./tasks/restart.js')(kbox);
  require('./tasks/start.js')(kbox);
  require('./tasks/stop.js')(kbox);
  require('./tasks/update.js')(kbox);
  require('./tasks/version.js')(kbox);

};
