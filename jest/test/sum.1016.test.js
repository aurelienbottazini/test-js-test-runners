const sum1016 = require('../sum1016.js');

test('adds 51 + 33 to equal 84 + 0.09390828467177459', () => {
  expect(sum1016(51, 33)).toBe(84 + 0.09390828467177459);
});