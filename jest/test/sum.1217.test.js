const sum1217 = require('../sum1217.js');

test('adds 11 + 3 to equal 14 + offset 0.1874069249506536', () => {
  expect(sum1217(11, 3)).toBe(14 + 0.1874069249506536);
});