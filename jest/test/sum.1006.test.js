const sum1006 = require('../sum1006.js');

test('adds 94 + 13 to equal 107 + offset 0.7172418123048354', () => {
  expect(sum1006(94, 13)).toBe(107 + 0.7172418123048354);
});