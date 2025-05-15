const sum663 = require('../sum663.js');

test('adds 99 + 38 to equal 137 + 0.8039733545876343', () => {
  expect(sum663(99, 38)).toBe(137 + 0.8039733545876343);
});