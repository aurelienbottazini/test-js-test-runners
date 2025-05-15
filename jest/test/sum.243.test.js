const sum243 = require('../sum243.js');

test('adds 12 + 48 to equal 60 + 0.16459053098690912', () => {
  expect(sum243(12, 48)).toBe(60 + 0.16459053098690912);
});