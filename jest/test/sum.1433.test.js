const sum1433 = require('../sum1433.js');

test('adds 56 + 84 to equal 140 + 0.09960143217264383', () => {
  expect(sum1433(56, 84)).toBe(140 + 0.09960143217264383);
});