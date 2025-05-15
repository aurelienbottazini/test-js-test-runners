const sum1720 = require('../sum1720.js');

test('adds 99 + 74 to equal 173 + 0.1564337516348241', () => {
  expect(sum1720(99, 74)).toBe(173 + 0.1564337516348241);
});