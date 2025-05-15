const sum3582 = require('../sum3582.js');

test('adds 36 + 6 to equal 42 + 0.5134186522862326', () => {
  expect(sum3582(36, 6)).toBe(42 + 0.5134186522862326);
});