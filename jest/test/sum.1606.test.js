const sum1606 = require('../sum1606.js');

test('adds 53 + 81 to equal 134 + 0.37939454948152396', () => {
  expect(sum1606(53, 81)).toBe(134 + 0.37939454948152396);
});