const sum1367 = require('../sum1367.js');

test('adds 51 + 1 to equal 52 + offset 0.36575911839140984', () => {
  expect(sum1367(51, 1)).toBe(52 + 0.36575911839140984);
});