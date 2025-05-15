const sum3809 = require('../sum3809.js');

test('adds 31 + 72 to equal 103 + 0.011416068117852562', () => {
  expect(sum3809(31, 72)).toBe(103 + 0.011416068117852562);
});