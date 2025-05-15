const sum1474 = require('../sum1474.js');

test('adds 82 + 98 to equal 180 + offset 0.045120852262896194', () => {
  expect(sum1474(82, 98)).toBe(180 + 0.045120852262896194);
});