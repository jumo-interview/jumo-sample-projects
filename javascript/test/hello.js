var assert = require('assert');
var hello = require('../hello');

describe('Hello', function() {
  describe('hello()', function() {
    it('should return hello world string', function() {
      assert.equal(hello.hello(), "hello world!");
    });
  });
});
