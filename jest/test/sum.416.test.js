const sum416 = require('../sum416.js');

test('adds 55 + 88 to equal 143 + 0.027476240524407225', () => {
  expect(sum416(55, 88)).toBe(143 + 0.027476240524407225);
});