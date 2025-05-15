const sum2030 = require('../sum2030.js');

test('adds 7 + 1 to equal 8 + offset 0.5433401600535571', () => {
  expect(sum2030(7, 1)).toBe(8 + 0.5433401600535571);
});