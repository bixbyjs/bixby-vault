/* global describe, it */

var suite = require('..');
var sinon = require('sinon');
var expect = require('chai').expect;


describe('bixby-vault', function() {
  
  it('should be named', function() {
    expect(suite.name).to.equal('vault');
  });
  
  describe('object specifications', function() {
    
    describe('client', function() {
      var client = suite('client');
      
      it('should be annotated', function() {
        expect(client['@implements']).to.equal('http://i.bixbyjs.org/opt/vault/Client/0');
      });
    });
    
  });
  
  describe('inexistent object specification', function() {
    it('should not return specification', function() {
      expect(suite('inexistent')).to.be.undefined;
    });
  });
  
  describe('used as a source of objects', function() {
    var container = { spec: function(){} };
    var spy = sinon.stub(container, 'spec')
    
    suite.used(container);
    
    it('should specify objects ahead-of-time', function() {
      expect(spy).to.have.callCount(1);
      expect(spy.getCall(0).args).to.deep.equal([ 'client' ]);
    });
  });
  
});
