const sum2699 = require('../sum2699.js');

test('adds 68 + 23 to equal 91 + offset 0.26038692236088334', () => {
  expect(sum2699(68, 23)).toBe(91 + 0.26038692236088334);
});