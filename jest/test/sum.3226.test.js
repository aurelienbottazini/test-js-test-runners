const sum3226 = require('../sum3226.js');

test('adds 82 + 50 to equal 132 + 0.49436464132041724', () => {
  expect(sum3226(82, 50)).toBe(132 + 0.49436464132041724);
});