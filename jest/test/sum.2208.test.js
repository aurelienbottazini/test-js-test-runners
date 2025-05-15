const sum2208 = require('../sum2208.js');

test('adds 34 + 95 to equal 129 + 0.28324698470633625', () => {
  expect(sum2208(34, 95)).toBe(129 + 0.28324698470633625);
});