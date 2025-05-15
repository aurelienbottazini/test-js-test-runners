const sum4416 = require('../sum4416.js');

test('adds 86 + 55 to equal 141 + offset 0.4337401677670447', () => {
  expect(sum4416(86, 55)).toBe(141 + 0.4337401677670447);
});