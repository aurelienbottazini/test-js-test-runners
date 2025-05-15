const sum3576 = require('../sum3576.js');

test('adds 66 + 30 to equal 96 + offset 0.6003063312020033', () => {
  expect(sum3576(66, 30)).toBe(96 + 0.6003063312020033);
});