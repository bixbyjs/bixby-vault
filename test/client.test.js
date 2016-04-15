/* global describe, it */

var factory = require('../lib/client');
var $require = require('proxyquire');
var sinon = require('sinon');
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
  
  describe('created object', function() {
    var client;
    var spyOnVault = sinon.spy(require('node-vault'));
    
    before(function() {
      var settings = { get: function(){} };
      var stub = sinon.stub(settings, 'get')
        .withArgs('url').returns('http://vault.example.test:8200')
        .withArgs('token').returns('keyboardcat');
      
      var factory = $require('../lib/client', { 'node-vault': spyOnVault });
      client = factory(settings);
    })
    
    it('should be created with options from settings', function() {
      expect(spyOnVault).to.have.been.calledWith({
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
