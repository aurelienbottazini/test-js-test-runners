const sum1786 = require('../sum1786.js');

test('adds 66 + 80 to equal 146 + 0.23851696784457832', () => {
  expect(sum1786(66, 80)).toBe(146 + 0.23851696784457832);
});