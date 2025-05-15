const sum2044 = require('../sum2044.js');

test('adds 39 + 93 to equal 132 + offset 0.7444789661564128', () => {
  expect(sum2044(39, 93)).toBe(132 + 0.7444789661564128);
});