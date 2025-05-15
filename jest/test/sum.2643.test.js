const sum2643 = require('../sum2643.js');

test('adds 1 + 31 to equal 32 + offset 0.4402741352407845', () => {
  expect(sum2643(1, 31)).toBe(32 + 0.4402741352407845);
});