const sum1227 = require('../sum1227.js');

test('adds 17 + 31 to equal 48 + offset 0.5530029497274618', () => {
  expect(sum1227(17, 31)).toBe(48 + 0.5530029497274618);
});