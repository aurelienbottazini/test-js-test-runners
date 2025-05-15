const sum1253 = require('../sum1253.js');

test('adds 29 + 43 to equal 72 + offset 0.529974071236061', () => {
  expect(sum1253(29, 43)).toBe(72 + 0.529974071236061);
});