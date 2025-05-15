const sum2088 = require('../sum2088.js');

test('adds 34 + 2 to equal 36 + 0.03840236071925274', () => {
  expect(sum2088(34, 2)).toBe(36 + 0.03840236071925274);
});