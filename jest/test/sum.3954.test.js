const sum3954 = require('../sum3954.js');

test('adds 87 + 44 to equal 131 + 0.015382847420908341', () => {
  expect(sum3954(87, 44)).toBe(131 + 0.015382847420908341);
});