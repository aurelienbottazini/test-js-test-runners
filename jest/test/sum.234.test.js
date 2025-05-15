const sum234 = require('../sum234.js');

test('adds 83 + 16 to equal 99 + 0.0321948368740127', () => {
  expect(sum234(83, 16)).toBe(99 + 0.0321948368740127);
});