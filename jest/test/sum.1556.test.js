const sum1556 = require('../sum1556.js');

test('adds 24 + 71 to equal 95 + offset 0.8664033810046691', () => {
  expect(sum1556(24, 71)).toBe(95 + 0.8664033810046691);
});