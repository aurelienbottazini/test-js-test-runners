const sum4179 = require('../sum4179.js');

test('adds 98 + 99 to equal 197 + 0.8022821883751782', () => {
  expect(sum4179(98, 99)).toBe(197 + 0.8022821883751782);
});