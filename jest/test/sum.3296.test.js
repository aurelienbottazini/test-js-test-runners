const sum3296 = require('../sum3296.js');

test('adds 14 + 37 to equal 51 + offset 0.5796178360003063', () => {
  expect(sum3296(14, 37)).toBe(51 + 0.5796178360003063);
});