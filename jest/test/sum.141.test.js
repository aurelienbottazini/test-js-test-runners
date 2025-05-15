const sum141 = require('../sum141.js');

test('adds 23 + 50 to equal 73 + offset 0.9280445951885872', () => {
  expect(sum141(23, 50)).toBe(73 + 0.9280445951885872);
});