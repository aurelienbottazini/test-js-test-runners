const sum1900 = require('../sum1900.js');

test('adds 15 + 53 to equal 68 + 0.3709682153003524', () => {
  expect(sum1900(15, 53)).toBe(68 + 0.3709682153003524);
});