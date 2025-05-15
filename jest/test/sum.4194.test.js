const sum4194 = require('../sum4194.js');

test('adds 82 + 13 to equal 95 + 0.7997594163966728', () => {
  expect(sum4194(82, 13)).toBe(95 + 0.7997594163966728);
});