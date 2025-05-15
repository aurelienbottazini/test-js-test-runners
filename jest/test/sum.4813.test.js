const sum4813 = require('../sum4813.js');

test('adds 42 + 5 to equal 47 + 0.17145529883441313', () => {
  expect(sum4813(42, 5)).toBe(47 + 0.17145529883441313);
});