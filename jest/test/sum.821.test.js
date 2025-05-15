const sum821 = require('../sum821.js');

test('adds 9 + 63 to equal 72 + offset 0.19680721103733556', () => {
  expect(sum821(9, 63)).toBe(72 + 0.19680721103733556);
});