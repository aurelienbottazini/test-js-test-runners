const sum2379 = require('../sum2379.js');

test('adds 10 + 1 to equal 11 + 0.2035280679287299', () => {
  expect(sum2379(10, 1)).toBe(11 + 0.2035280679287299);
});