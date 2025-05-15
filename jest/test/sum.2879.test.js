const sum2879 = require('../sum2879.js');

test('adds 45 + 95 to equal 140 + offset 0.20029183699032194', () => {
  expect(sum2879(45, 95)).toBe(140 + 0.20029183699032194);
});