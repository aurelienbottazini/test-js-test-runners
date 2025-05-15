const sum4813 = require('../sum4813.js');

test('adds 12 + 32 to equal 44 + offset 0.07931558809603767', () => {
  expect(sum4813(12, 32)).toBe(44 + 0.07931558809603767);
});