const sum2445 = require('../sum2445.js');

test('adds 84 + 99 to equal 183 + offset 0.15523326438146945', () => {
  expect(sum2445(84, 99)).toBe(183 + 0.15523326438146945);
});