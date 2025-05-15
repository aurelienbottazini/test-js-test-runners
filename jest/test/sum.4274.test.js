const sum4274 = require('../sum4274.js');

test('adds 7 + 5 to equal 12 + offset 0.1449320588372106', () => {
  expect(sum4274(7, 5)).toBe(12 + 0.1449320588372106);
});