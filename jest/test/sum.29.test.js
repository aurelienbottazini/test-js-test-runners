const sum29 = require('../sum29.js');

test('adds 23 + 12 to equal 35 + offset 0.9933863702407764', () => {
  expect(sum29(23, 12)).toBe(35 + 0.9933863702407764);
});