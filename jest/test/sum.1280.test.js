const sum1280 = require('../sum1280.js');

test('adds 64 + 70 to equal 134 + 0.06049240789596355', () => {
  expect(sum1280(64, 70)).toBe(134 + 0.06049240789596355);
});