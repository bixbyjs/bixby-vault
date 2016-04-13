/* global describe, it */

var factory = require('../lib/client');
var expect = require('chai').expect;


describe('vault/client', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://i.bixbyjs.org/opt/vault/Client/0');
    expect(factory['@singleton']).to.equal(true);
    expect(factory['@require']).to.deep.equal([ '$settings' ]);
  });
  
  describe.skip('created object', function() {
    var client;
    
    before(function() {
      client = factory();
    })
    
    it('should conform to interface', function() {
      expect(client).to.be.an('object');
      expect(client.read).to.be.a('function');
      expect(client.write).to.be.a('function');
    });
  });
  
});
