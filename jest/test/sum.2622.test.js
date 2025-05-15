const sum2622 = require('../sum2622.js');

test('adds 52 + 11 to equal 63 + 0.2366793934366499', () => {
  expect(sum2622(52, 11)).toBe(63 + 0.2366793934366499);
});