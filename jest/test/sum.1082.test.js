const sum1082 = require('../sum1082.js');

test('adds 4 + 15 to equal 19 + 0.952332597527927', () => {
  expect(sum1082(4, 15)).toBe(19 + 0.952332597527927);
});