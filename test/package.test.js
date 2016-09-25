/* global describe, it */

var expect = require('chai').expect;
var source = require('..');


describe('bixby-vault', function() {
  
  it('should export manifest', function() {
    expect(source).to.be.an('object');
    expect(source['client']).to.be.a('function');
  });
  
  describe('opt/vault/client', function() {
    var client = source['client'];
    
    it('should be annotated', function() {
      expect(client['@implements']).to.equal('http://i.bixbyjs.org/opt/vault/Client/0');
      expect(client['@singleton']).to.equal(true);
    });
  });
  
});
