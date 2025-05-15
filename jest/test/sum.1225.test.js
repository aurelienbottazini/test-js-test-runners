const sum1225 = require('../sum1225.js');

test('adds 40 + 37 to equal 77 + offset 0.7755423784010246', () => {
  expect(sum1225(40, 37)).toBe(77 + 0.7755423784010246);
});