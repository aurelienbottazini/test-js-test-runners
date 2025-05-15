const sum2179 = require('../sum2179.js');

test('adds 22 + 2 to equal 24 + offset 0.6492232796178928', () => {
  expect(sum2179(22, 2)).toBe(24 + 0.6492232796178928);
});