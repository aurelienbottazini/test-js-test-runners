const sum4037 = require('../sum4037.js');

test('adds 26 + 99 to equal 125 + 0.2125056423619479', () => {
  expect(sum4037(26, 99)).toBe(125 + 0.2125056423619479);
});