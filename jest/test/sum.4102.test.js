const sum4102 = require('../sum4102.js');

test('adds 85 + 14 to equal 99 + offset 0.9881424921348975', () => {
  expect(sum4102(85, 14)).toBe(99 + 0.9881424921348975);
});