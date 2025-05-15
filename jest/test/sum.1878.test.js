const sum1878 = require('../sum1878.js');

test('adds 55 + 44 to equal 99 + 0.20418045390935025', () => {
  expect(sum1878(55, 44)).toBe(99 + 0.20418045390935025);
});