const sum2876 = require('../sum2876.js');

test('adds 53 + 33 to equal 86 + offset 0.6615887233353812', () => {
  expect(sum2876(53, 33)).toBe(86 + 0.6615887233353812);
});