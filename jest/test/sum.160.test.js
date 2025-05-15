const sum160 = require('../sum160.js');

test('adds 58 + 8 to equal 66 + 0.8740737884443819', () => {
  expect(sum160(58, 8)).toBe(66 + 0.8740737884443819);
});