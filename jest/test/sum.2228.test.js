const sum2228 = require('../sum2228.js');

test('adds 60 + 26 to equal 86 + offset 0.18727707131182547', () => {
  expect(sum2228(60, 26)).toBe(86 + 0.18727707131182547);
});