const sum1824 = require('../sum1824.js');

test('adds 73 + 1 to equal 74 + offset 0.4298546096677327', () => {
  expect(sum1824(73, 1)).toBe(74 + 0.4298546096677327);
});