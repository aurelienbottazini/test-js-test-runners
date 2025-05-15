const sum2615 = require('../sum2615.js');

test('adds 96 + 9 to equal 105 + offset 0.1625905975806693', () => {
  expect(sum2615(96, 9)).toBe(105 + 0.1625905975806693);
});