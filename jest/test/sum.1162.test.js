const sum1162 = require('../sum1162.js');

test('adds 35 + 99 to equal 134 + offset 0.21248240175113564', () => {
  expect(sum1162(35, 99)).toBe(134 + 0.21248240175113564);
});