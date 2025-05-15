const sum2202 = require('../sum2202.js');

test('adds 57 + 11 to equal 68 + 0.9727233012401928', () => {
  expect(sum2202(57, 11)).toBe(68 + 0.9727233012401928);
});