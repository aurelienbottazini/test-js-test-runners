const sum4029 = require('../sum4029.js');

test('adds 76 + 82 to equal 158 + 0.29018883295396114', () => {
  expect(sum4029(76, 82)).toBe(158 + 0.29018883295396114);
});