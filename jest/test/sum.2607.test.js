const sum2607 = require('../sum2607.js');

test('adds 77 + 9 to equal 86 + offset 0.9965546345470683', () => {
  expect(sum2607(77, 9)).toBe(86 + 0.9965546345470683);
});