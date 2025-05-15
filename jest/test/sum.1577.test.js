const sum1577 = require('../sum1577.js');

test('adds 7 + 22 to equal 29 + offset 0.4012749553796018', () => {
  expect(sum1577(7, 22)).toBe(29 + 0.4012749553796018);
});