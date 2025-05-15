const sum3863 = require('../sum3863.js');

test('adds 16 + 26 to equal 42 + offset 0.03160910330670541', () => {
  expect(sum3863(16, 26)).toBe(42 + 0.03160910330670541);
});