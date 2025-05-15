const sum1558 = require('../sum1558.js');

test('adds 0 + 48 to equal 48 + offset 0.63536559010853', () => {
  expect(sum1558(0, 48)).toBe(48 + 0.63536559010853);
});