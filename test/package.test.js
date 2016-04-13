/* global describe, it */

var suite = require('..');
var expect = require('chai').expect;


describe('bixby-vault', function() {
  
  it('should export object', function() {
    expect(suite).to.be.a('function');
  });
  
});
