const sum4802 = require('../sum4802.js');

test('adds 89 + 31 to equal 120 + 0.7389456073922455', () => {
  expect(sum4802(89, 31)).toBe(120 + 0.7389456073922455);
});