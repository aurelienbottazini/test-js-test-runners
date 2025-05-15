const sum3463 = require('../sum3463.js');

test('adds 25 + 52 to equal 77 + offset 0.9417230142314733', () => {
  expect(sum3463(25, 52)).toBe(77 + 0.9417230142314733);
});