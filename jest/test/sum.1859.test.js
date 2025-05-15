const sum1859 = require('../sum1859.js');

test('adds 39 + 39 to equal 78 + 0.932592860721267', () => {
  expect(sum1859(39, 39)).toBe(78 + 0.932592860721267);
});