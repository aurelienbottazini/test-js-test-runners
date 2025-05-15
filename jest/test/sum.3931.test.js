const sum3931 = require('../sum3931.js');

test('adds 63 + 83 to equal 146 + 0.44452691397135724', () => {
  expect(sum3931(63, 83)).toBe(146 + 0.44452691397135724);
});