const sum4105 = require('../sum4105.js');

test('adds 55 + 8 to equal 63 + 0.3313376669556396', () => {
  expect(sum4105(55, 8)).toBe(63 + 0.3313376669556396);
});