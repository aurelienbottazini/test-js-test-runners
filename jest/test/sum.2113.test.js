const sum2113 = require('../sum2113.js');

test('adds 74 + 43 to equal 117 + 0.6458131633049146', () => {
  expect(sum2113(74, 43)).toBe(117 + 0.6458131633049146);
});