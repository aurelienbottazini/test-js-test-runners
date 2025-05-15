const sum1540 = require('../sum1540.js');

test('adds 51 + 12 to equal 63 + offset 0.19653853019426082', () => {
  expect(sum1540(51, 12)).toBe(63 + 0.19653853019426082);
});