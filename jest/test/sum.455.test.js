const sum455 = require('../sum455.js');

test('adds 64 + 12 to equal 76 + 0.6449455170937889', () => {
  expect(sum455(64, 12)).toBe(76 + 0.6449455170937889);
});