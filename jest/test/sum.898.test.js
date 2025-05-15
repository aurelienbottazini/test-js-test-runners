const sum898 = require('../sum898.js');

test('adds 65 + 10 to equal 75 + offset 0.7831799339403089', () => {
  expect(sum898(65, 10)).toBe(75 + 0.7831799339403089);
});