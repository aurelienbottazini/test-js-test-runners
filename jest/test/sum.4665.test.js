const sum4665 = require('../sum4665.js');

test('adds 24 + 42 to equal 66 + offset 0.4372219123042922', () => {
  expect(sum4665(24, 42)).toBe(66 + 0.4372219123042922);
});