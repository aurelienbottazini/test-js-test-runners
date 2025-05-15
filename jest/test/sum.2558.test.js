const sum2558 = require('../sum2558.js');

test('adds 25 + 52 to equal 77 + offset 0.42128690213352227', () => {
  expect(sum2558(25, 52)).toBe(77 + 0.42128690213352227);
});