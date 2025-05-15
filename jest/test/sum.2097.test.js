const sum2097 = require('../sum2097.js');

test('adds 23 + 3 to equal 26 + offset 0.1123254489454335', () => {
  expect(sum2097(23, 3)).toBe(26 + 0.1123254489454335);
});