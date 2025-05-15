const sum430 = require('../sum430.js');

test('adds 75 + 99 to equal 174 + offset 0.7871055558141029', () => {
  expect(sum430(75, 99)).toBe(174 + 0.7871055558141029);
});