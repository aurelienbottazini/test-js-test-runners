const sum2239 = require('../sum2239.js');

test('adds 38 + 44 to equal 82 + offset 0.7995581467975835', () => {
  expect(sum2239(38, 44)).toBe(82 + 0.7995581467975835);
});