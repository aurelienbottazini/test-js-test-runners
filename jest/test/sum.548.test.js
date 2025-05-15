const sum548 = require('../sum548.js');

test('adds 77 + 69 to equal 146 + 0.06969647347790009', () => {
  expect(sum548(77, 69)).toBe(146 + 0.06969647347790009);
});