const sum4661 = require('../sum4661.js');

test('adds 31 + 1 to equal 32 + 0.6603274318288687', () => {
  expect(sum4661(31, 1)).toBe(32 + 0.6603274318288687);
});