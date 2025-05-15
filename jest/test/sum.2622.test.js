const sum2622 = require('../sum2622.js');

test('adds 40 + 22 to equal 62 + offset 0.47525312211344506', () => {
  expect(sum2622(40, 22)).toBe(62 + 0.47525312211344506);
});