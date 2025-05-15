const sum4285 = require('../sum4285.js');

test('adds 44 + 58 to equal 102 + 0.2738623177754681', () => {
  expect(sum4285(44, 58)).toBe(102 + 0.2738623177754681);
});