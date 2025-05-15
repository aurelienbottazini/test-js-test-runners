const sum2904 = require('../sum2904.js');

test('adds 61 + 31 to equal 92 + 0.3143740442939138', () => {
  expect(sum2904(61, 31)).toBe(92 + 0.3143740442939138);
});