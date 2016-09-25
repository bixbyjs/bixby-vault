/* global describe, it */

var $require = require('proxyquire');
var expect = require('chai').expect;
var sinon = require('sinon');
var factory = require('../xom/client');
var Settings = require('decisions').Settings;


describe('vault/client', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://i.bixbyjs.org/opt/vault/Client/0');
    expect(factory['@singleton']).to.equal(true);
    expect(factory['@require']).to.deep.equal([ 'http://i.bixbyjs.org/Settings' ]);
  });
  
  describe('Client', function() {
    var client;
    var constructor = sinon.spy(require('node-vault'));
    
    before(function() {
      var settings = { isolate: function(){} };
      var stub = sinon.stub(settings, 'isolate')
        .withArgs('opt/vault').returns(new Settings({
          url: 'http://vault.example.test:8200',
          token: 'keyboardcat'
        }));
      
      var factory = $require('../xom/client', { 'node-vault': constructor });
      client = factory.call({ baseNS: 'opt/vault' }, settings);
    })
    
    it('should be created with options from settings', function() {
      expect(constructor).to.have.been.calledWith({
        endpoint: 'http://vault.example.test:8200',
        token: 'keyboardcat'
      });
    });
    
    it('should conform to interface', function() {
      expect(client).to.be.an('object');
      expect(client.read).to.be.a('function');
      expect(client.write).to.be.a('function');
    });
  });
  
});
