const sum1253 = require('../sum1253.js');

test('adds 89 + 12 to equal 101 + 0.8371745440655635', () => {
  expect(sum1253(89, 12)).toBe(101 + 0.8371745440655635);
});