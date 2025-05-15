const sum1366 = require('../sum1366.js');

test('adds 58 + 79 to equal 137 + offset 0.29959417382907794', () => {
  expect(sum1366(58, 79)).toBe(137 + 0.29959417382907794);
});