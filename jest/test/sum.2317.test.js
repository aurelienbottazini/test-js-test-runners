const sum2317 = require('../sum2317.js');

test('adds 7 + 74 to equal 81 + offset 0.06906279745073673', () => {
  expect(sum2317(7, 74)).toBe(81 + 0.06906279745073673);
});