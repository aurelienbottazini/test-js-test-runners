const sum1660 = require('../sum1660.js');

test('adds 15 + 84 to equal 99 + 0.4177029828407929', () => {
  expect(sum1660(15, 84)).toBe(99 + 0.4177029828407929);
});