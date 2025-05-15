const sum3869 = require('../sum3869.js');

test('adds 98 + 35 to equal 133 + offset 0.03341491920051165', () => {
  expect(sum3869(98, 35)).toBe(133 + 0.03341491920051165);
});