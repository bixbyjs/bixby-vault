/* global describe, it */

var suite = require('..');
var expect = require('chai').expect;


describe('bixby-vault', function() {
  
  describe('object specifications', function() {
    
    describe('client', function() {
      var client = suite('client');
      
      it('should be annotated', function() {
        expect(client['@implements']).to.equal('http://i.bixbyjs.org/opt/vault/Client/0');
      });
    });
    
  });
  
});
