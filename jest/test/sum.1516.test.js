const sum1516 = require('../sum1516.js');

test('adds 38 + 40 to equal 78 + offset 0.59962482603451', () => {
  expect(sum1516(38, 40)).toBe(78 + 0.59962482603451);
});