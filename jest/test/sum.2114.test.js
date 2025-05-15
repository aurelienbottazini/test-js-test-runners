const sum2114 = require('../sum2114.js');

test('adds 74 + 88 to equal 162 + 0.028373521447765837', () => {
  expect(sum2114(74, 88)).toBe(162 + 0.028373521447765837);
});