const sum4834 = require('../sum4834.js');

test('adds 39 + 42 to equal 81 + 0.06657506385544043', () => {
  expect(sum4834(39, 42)).toBe(81 + 0.06657506385544043);
});