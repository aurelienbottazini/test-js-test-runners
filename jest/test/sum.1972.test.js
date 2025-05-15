const sum1972 = require('../sum1972.js');

test('adds 54 + 3 to equal 57 + 0.7503357247595326', () => {
  expect(sum1972(54, 3)).toBe(57 + 0.7503357247595326);
});