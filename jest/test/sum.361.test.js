const sum361 = require('../sum361.js');

test('adds 77 + 11 to equal 88 + 0.6462363593525489', () => {
  expect(sum361(77, 11)).toBe(88 + 0.6462363593525489);
});