const sum1637 = require('../sum1637.js');

test('adds 99 + 88 to equal 187 + offset 0.7983945399769078', () => {
  expect(sum1637(99, 88)).toBe(187 + 0.7983945399769078);
});