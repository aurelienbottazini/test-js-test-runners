const sum4105 = require('../sum4105.js');

test('adds 3 + 69 to equal 72 + offset 0.34714125780570326', () => {
  expect(sum4105(3, 69)).toBe(72 + 0.34714125780570326);
});