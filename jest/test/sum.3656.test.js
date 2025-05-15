const sum3656 = require('../sum3656.js');

test('adds 23 + 92 to equal 115 + 0.018296816901900104', () => {
  expect(sum3656(23, 92)).toBe(115 + 0.018296816901900104);
});