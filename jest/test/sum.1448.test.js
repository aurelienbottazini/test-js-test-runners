const sum1448 = require('../sum1448.js');

test('adds 69 + 94 to equal 163 + offset 0.3751403256302286', () => {
  expect(sum1448(69, 94)).toBe(163 + 0.3751403256302286);
});