const sum2177 = require('../sum2177.js');

test('adds 2 + 96 to equal 98 + offset 0.4561491650737389', () => {
  expect(sum2177(2, 96)).toBe(98 + 0.4561491650737389);
});