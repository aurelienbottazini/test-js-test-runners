const sum2480 = require('../sum2480.js');

test('adds 66 + 14 to equal 80 + offset 0.7348851200770417', () => {
  expect(sum2480(66, 14)).toBe(80 + 0.7348851200770417);
});