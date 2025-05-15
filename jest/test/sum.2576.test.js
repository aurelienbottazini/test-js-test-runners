const sum2576 = require('../sum2576.js');

test('adds 55 + 51 to equal 106 + offset 0.6330774628804074', () => {
  expect(sum2576(55, 51)).toBe(106 + 0.6330774628804074);
});