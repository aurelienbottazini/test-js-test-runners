const sum2123 = require('../sum2123.js');

test('adds 1 + 98 to equal 99 + 0.7135265216509509', () => {
  expect(sum2123(1, 98)).toBe(99 + 0.7135265216509509);
});