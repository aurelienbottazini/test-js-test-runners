const sum2975 = require('../sum2975.js');

test('adds 40 + 93 to equal 133 + offset 0.19714590359149564', () => {
  expect(sum2975(40, 93)).toBe(133 + 0.19714590359149564);
});