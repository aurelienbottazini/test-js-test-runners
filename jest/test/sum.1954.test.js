const sum1954 = require('../sum1954.js');

test('adds 95 + 58 to equal 153 + offset 0.38047206462006977', () => {
  expect(sum1954(95, 58)).toBe(153 + 0.38047206462006977);
});