const sum1292 = require('../sum1292.js');

test('adds 23 + 90 to equal 113 + offset 0.9316867828771951', () => {
  expect(sum1292(23, 90)).toBe(113 + 0.9316867828771951);
});