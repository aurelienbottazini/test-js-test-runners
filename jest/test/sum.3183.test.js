const sum3183 = require('../sum3183.js');

test('adds 39 + 68 to equal 107 + 0.7256751599605606', () => {
  expect(sum3183(39, 68)).toBe(107 + 0.7256751599605606);
});