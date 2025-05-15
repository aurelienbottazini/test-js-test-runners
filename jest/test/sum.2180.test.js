const sum2180 = require('../sum2180.js');

test('adds 56 + 26 to equal 82 + 0.10464785168369273', () => {
  expect(sum2180(56, 26)).toBe(82 + 0.10464785168369273);
});