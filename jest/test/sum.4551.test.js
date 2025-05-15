const sum4551 = require('../sum4551.js');

test('adds 0 + 15 to equal 15 + offset 0.741293618694792', () => {
  expect(sum4551(0, 15)).toBe(15 + 0.741293618694792);
});