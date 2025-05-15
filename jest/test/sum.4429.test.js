const sum4429 = require('../sum4429.js');

test('adds 7 + 67 to equal 74 + offset 0.5838935583125423', () => {
  expect(sum4429(7, 67)).toBe(74 + 0.5838935583125423);
});