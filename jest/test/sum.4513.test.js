const sum4513 = require('../sum4513.js');

test('adds 97 + 31 to equal 128 + 0.5370108041973871', () => {
  expect(sum4513(97, 31)).toBe(128 + 0.5370108041973871);
});