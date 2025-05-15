const sum2256 = require('../sum2256.js');

test('adds 34 + 15 to equal 49 + offset 0.5041209455333433', () => {
  expect(sum2256(34, 15)).toBe(49 + 0.5041209455333433);
});