const sum2365 = require('../sum2365.js');

test('adds 73 + 85 to equal 158 + offset 0.028499171581627958', () => {
  expect(sum2365(73, 85)).toBe(158 + 0.028499171581627958);
});