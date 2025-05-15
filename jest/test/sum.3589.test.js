const sum3589 = require('../sum3589.js');

test('adds 37 + 32 to equal 69 + offset 0.8573005117690086', () => {
  expect(sum3589(37, 32)).toBe(69 + 0.8573005117690086);
});