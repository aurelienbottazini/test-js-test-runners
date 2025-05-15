const sum2388 = require('../sum2388.js');

test('adds 47 + 15 to equal 62 + 0.08648196309346246', () => {
  expect(sum2388(47, 15)).toBe(62 + 0.08648196309346246);
});