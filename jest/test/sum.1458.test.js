const sum1458 = require('../sum1458.js');

test('adds 30 + 55 to equal 85 + 0.4540520557313791', () => {
  expect(sum1458(30, 55)).toBe(85 + 0.4540520557313791);
});