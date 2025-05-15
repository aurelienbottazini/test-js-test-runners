const sum4680 = require('../sum4680.js');

test('adds 47 + 0 to equal 47 + offset 0.2361178726508436', () => {
  expect(sum4680(47, 0)).toBe(47 + 0.2361178726508436);
});