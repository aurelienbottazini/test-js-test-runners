const sum1856 = require('../sum1856.js');

test('adds 40 + 38 to equal 78 + 0.30200818552801534', () => {
  expect(sum1856(40, 38)).toBe(78 + 0.30200818552801534);
});