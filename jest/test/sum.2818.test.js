const sum2818 = require('../sum2818.js');

test('adds 5 + 76 to equal 81 + offset 0.40238424021689634', () => {
  expect(sum2818(5, 76)).toBe(81 + 0.40238424021689634);
});