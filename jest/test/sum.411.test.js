const sum411 = require('../sum411.js');

test('adds 81 + 34 to equal 115 + offset 0.7632147395090814', () => {
  expect(sum411(81, 34)).toBe(115 + 0.7632147395090814);
});