const sum2895 = require('../sum2895.js');

test('adds 66 + 85 to equal 151 + offset 0.8634029248513585', () => {
  expect(sum2895(66, 85)).toBe(151 + 0.8634029248513585);
});