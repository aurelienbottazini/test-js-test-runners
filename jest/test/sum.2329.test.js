const sum2329 = require('../sum2329.js');

test('adds 82 + 92 to equal 174 + offset 0.23209107099825166', () => {
  expect(sum2329(82, 92)).toBe(174 + 0.23209107099825166);
});