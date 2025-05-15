const sum1576 = require('../sum1576.js');

test('adds 38 + 13 to equal 51 + offset 0.5628894358254939', () => {
  expect(sum1576(38, 13)).toBe(51 + 0.5628894358254939);
});