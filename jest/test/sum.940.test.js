const sum940 = require('../sum940.js');

test('adds 2 + 7 to equal 9 + 0.25662902961341727', () => {
  expect(sum940(2, 7)).toBe(9 + 0.25662902961341727);
});