const sum2337 = require('../sum2337.js');

test('adds 72 + 42 to equal 114 + 0.4874231421806645', () => {
  expect(sum2337(72, 42)).toBe(114 + 0.4874231421806645);
});