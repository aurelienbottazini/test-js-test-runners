const sum1942 = require('../sum1942.js');

test('adds 21 + 40 to equal 61 + 0.9975775046048916', () => {
  expect(sum1942(21, 40)).toBe(61 + 0.9975775046048916);
});