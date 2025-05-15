const sum2508 = require('../sum2508.js');

test('adds 19 + 48 to equal 67 + offset 0.059972199252409486', () => {
  expect(sum2508(19, 48)).toBe(67 + 0.059972199252409486);
});