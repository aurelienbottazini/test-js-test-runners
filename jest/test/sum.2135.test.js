const sum2135 = require('../sum2135.js');

test('adds 58 + 7 to equal 65 + offset 0.6135369667988345', () => {
  expect(sum2135(58, 7)).toBe(65 + 0.6135369667988345);
});