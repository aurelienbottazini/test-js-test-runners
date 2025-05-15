const sum1698 = require('../sum1698.js');

test('adds 49 + 55 to equal 104 + offset 0.42750866617091954', () => {
  expect(sum1698(49, 55)).toBe(104 + 0.42750866617091954);
});