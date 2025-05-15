const sum2626 = require('../sum2626.js');

test('adds 47 + 33 to equal 80 + 0.24743808090281194', () => {
  expect(sum2626(47, 33)).toBe(80 + 0.24743808090281194);
});