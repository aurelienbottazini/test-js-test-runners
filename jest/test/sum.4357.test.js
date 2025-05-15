const sum4357 = require('../sum4357.js');

test('adds 17 + 83 to equal 100 + offset 0.47900217927709376', () => {
  expect(sum4357(17, 83)).toBe(100 + 0.47900217927709376);
});