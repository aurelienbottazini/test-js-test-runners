const sum343 = require('../sum343.js');

test('adds 46 + 17 to equal 63 + offset 0.6283448922838856', () => {
  expect(sum343(46, 17)).toBe(63 + 0.6283448922838856);
});