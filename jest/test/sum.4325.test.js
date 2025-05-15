const sum4325 = require('../sum4325.js');

test('adds 52 + 68 to equal 120 + 0.04027977440706865', () => {
  expect(sum4325(52, 68)).toBe(120 + 0.04027977440706865);
});