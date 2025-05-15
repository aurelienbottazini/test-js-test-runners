const sum1239 = require('../sum1239.js');

test('adds 65 + 28 to equal 93 + 0.6897201914814899', () => {
  expect(sum1239(65, 28)).toBe(93 + 0.6897201914814899);
});