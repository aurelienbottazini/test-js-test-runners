const sum4442 = require('../sum4442.js');

test('adds 28 + 52 to equal 80 + offset 0.3118717079126364', () => {
  expect(sum4442(28, 52)).toBe(80 + 0.3118717079126364);
});