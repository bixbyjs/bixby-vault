exports = module.exports = function(settings) {
  // Load modules.
  var vault = require('node-vault');
  
  
  settings = settings.isolate(this.baseNS);
  
  var options = {
    endpoint: settings.get('url'),
    token: settings.get('token')
  };
  
  var client = vault(options);
  // TODO: Add init and unseal initializers
  return client;
};

exports['@implements'] = 'http://i.bixbyjs.org/opt/vault/Client/0';
exports['@singleton'] = true;
exports['@require'] = [ 'http://i.bixbyjs.org/Settings' ];
