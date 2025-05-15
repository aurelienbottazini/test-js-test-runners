const sum1823 = require('../sum1823.js');

test('adds 4 + 59 to equal 63 + 0.8971101601278549', () => {
  expect(sum1823(4, 59)).toBe(63 + 0.8971101601278549);
});