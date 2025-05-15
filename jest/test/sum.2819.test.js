const sum2819 = require('../sum2819.js');

test('adds 87 + 62 to equal 149 + offset 0.000998913848802463', () => {
  expect(sum2819(87, 62)).toBe(149 + 0.000998913848802463);
});