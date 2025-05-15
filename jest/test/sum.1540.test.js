const sum1540 = require('../sum1540.js');

test('adds 53 + 2 to equal 55 + 0.9295006258368088', () => {
  expect(sum1540(53, 2)).toBe(55 + 0.9295006258368088);
});