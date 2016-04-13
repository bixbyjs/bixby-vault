exports = module.exports = function(settings, logger) {
  var vault = require('node-vault');
  
  
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
exports['@require'] = [ '$settings', 'http://i.bixbyjs.org/Logger' ];
