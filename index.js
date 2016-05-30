exports = module.exports = function vault(id) {
  var map = {
    'client': './xom/client'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  container.add('client');
};
