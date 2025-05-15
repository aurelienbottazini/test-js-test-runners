const sum4406 = require('../sum4406.js');

test('adds 44 + 90 to equal 134 + 0.28279159814698873', () => {
  expect(sum4406(44, 90)).toBe(134 + 0.28279159814698873);
});