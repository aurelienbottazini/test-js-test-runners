const sum2008 = require('../sum2008.js');

test('adds 61 + 34 to equal 95 + 0.78439987275273', () => {
  expect(sum2008(61, 34)).toBe(95 + 0.78439987275273);
});