const sum4364 = require('../sum4364.js');

test('adds 92 + 67 to equal 159 + offset 0.6942008695161598', () => {
  expect(sum4364(92, 67)).toBe(159 + 0.6942008695161598);
});