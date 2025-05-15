const sum1411 = require('../sum1411.js');

test('adds 20 + 62 to equal 82 + offset 0.7920201241559061', () => {
  expect(sum1411(20, 62)).toBe(82 + 0.7920201241559061);
});