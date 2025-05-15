const sum279 = require('../sum279.js');

test('adds 95 + 22 to equal 117 + offset 0.9574446940783077', () => {
  expect(sum279(95, 22)).toBe(117 + 0.9574446940783077);
});