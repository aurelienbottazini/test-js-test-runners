const sum2754 = require('../sum2754.js');

test('adds 81 + 62 to equal 143 + 0.9917715433045758', () => {
  expect(sum2754(81, 62)).toBe(143 + 0.9917715433045758);
});