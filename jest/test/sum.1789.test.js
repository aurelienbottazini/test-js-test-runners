const sum1789 = require('../sum1789.js');

test('adds 99 + 10 to equal 109 + 0.39980918239605756', () => {
  expect(sum1789(99, 10)).toBe(109 + 0.39980918239605756);
});