const sum3420 = require('../sum3420.js');

test('adds 62 + 84 to equal 146 + 0.3015322934390745', () => {
  expect(sum3420(62, 84)).toBe(146 + 0.3015322934390745);
});