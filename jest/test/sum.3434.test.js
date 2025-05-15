const sum3434 = require('../sum3434.js');

test('adds 8 + 69 to equal 77 + offset 0.9300467204698354', () => {
  expect(sum3434(8, 69)).toBe(77 + 0.9300467204698354);
});