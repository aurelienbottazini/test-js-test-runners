const sum3533 = require('../sum3533.js');

test('adds 56 + 56 to equal 112 + offset 0.9111256492710581', () => {
  expect(sum3533(56, 56)).toBe(112 + 0.9111256492710581);
});