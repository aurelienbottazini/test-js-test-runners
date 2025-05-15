const sum82 = require('../sum82.js');

test('adds 82 + 37 to equal 119 + 0.04284590796829768', () => {
  expect(sum82(82, 37)).toBe(119 + 0.04284590796829768);
});