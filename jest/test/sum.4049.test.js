const sum4049 = require('../sum4049.js');

test('adds 55 + 82 to equal 137 + 0.038719336872723775', () => {
  expect(sum4049(55, 82)).toBe(137 + 0.038719336872723775);
});