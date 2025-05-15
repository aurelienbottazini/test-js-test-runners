const sum4110 = require('../sum4110.js');

test('adds 78 + 6 to equal 84 + 0.36122507327137476', () => {
  expect(sum4110(78, 6)).toBe(84 + 0.36122507327137476);
});