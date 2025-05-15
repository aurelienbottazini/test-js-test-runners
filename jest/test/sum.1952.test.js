const sum1952 = require('../sum1952.js');

test('adds 31 + 56 to equal 87 + offset 0.3598009953612592', () => {
  expect(sum1952(31, 56)).toBe(87 + 0.3598009953612592);
});