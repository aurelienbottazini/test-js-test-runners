const sum199 = require('../sum199.js');

test('adds 24 + 42 to equal 66 + 0.8151920449425999', () => {
  expect(sum199(24, 42)).toBe(66 + 0.8151920449425999);
});