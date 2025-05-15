const sum898 = require('../sum898.js');

test('adds 19 + 81 to equal 100 + 0.5126822451586307', () => {
  expect(sum898(19, 81)).toBe(100 + 0.5126822451586307);
});