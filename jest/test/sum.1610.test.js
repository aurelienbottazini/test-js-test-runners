const sum1610 = require('../sum1610.js');

test('adds 84 + 97 to equal 181 + 0.6216832091849265', () => {
  expect(sum1610(84, 97)).toBe(181 + 0.6216832091849265);
});