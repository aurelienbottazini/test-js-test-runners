const sum2031 = require('../sum2031.js');

test('adds 77 + 85 to equal 162 + offset 0.2875681323561501', () => {
  expect(sum2031(77, 85)).toBe(162 + 0.2875681323561501);
});