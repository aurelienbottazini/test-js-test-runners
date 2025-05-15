const sum3560 = require('../sum3560.js');

test('adds 96 + 79 to equal 175 + offset 0.3601434682975334', () => {
  expect(sum3560(96, 79)).toBe(175 + 0.3601434682975334);
});