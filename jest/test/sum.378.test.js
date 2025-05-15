const sum378 = require('../sum378.js');

test('adds 42 + 37 to equal 79 + offset 0.5445496473818987', () => {
  expect(sum378(42, 37)).toBe(79 + 0.5445496473818987);
});