const sum1433 = require('../sum1433.js');

test('adds 86 + 38 to equal 124 + offset 0.26189315306779315', () => {
  expect(sum1433(86, 38)).toBe(124 + 0.26189315306779315);
});