const sum1858 = require('../sum1858.js');

test('adds 68 + 97 to equal 165 + offset 0.3967350928524427', () => {
  expect(sum1858(68, 97)).toBe(165 + 0.3967350928524427);
});