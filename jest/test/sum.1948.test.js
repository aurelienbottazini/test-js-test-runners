const sum1948 = require('../sum1948.js');

test('adds 69 + 95 to equal 164 + 0.6714603822192108', () => {
  expect(sum1948(69, 95)).toBe(164 + 0.6714603822192108);
});