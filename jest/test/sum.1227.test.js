const sum1227 = require('../sum1227.js');

test('adds 16 + 8 to equal 24 + 0.23762297644962116', () => {
  expect(sum1227(16, 8)).toBe(24 + 0.23762297644962116);
});