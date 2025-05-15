const sum2712 = require('../sum2712.js');

test('adds 68 + 34 to equal 102 + offset 0.4665233496921948', () => {
  expect(sum2712(68, 34)).toBe(102 + 0.4665233496921948);
});