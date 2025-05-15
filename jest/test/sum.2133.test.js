const sum2133 = require('../sum2133.js');

test('adds 30 + 71 to equal 101 + 0.23001561448119923', () => {
  expect(sum2133(30, 71)).toBe(101 + 0.23001561448119923);
});