const sum2337 = require('../sum2337.js');

test('adds 20 + 18 to equal 38 + offset 0.9376608036732894', () => {
  expect(sum2337(20, 18)).toBe(38 + 0.9376608036732894);
});