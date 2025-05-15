const sum535 = require('../sum535.js');

test('adds 53 + 14 to equal 67 + offset 0.3320049015801484', () => {
  expect(sum535(53, 14)).toBe(67 + 0.3320049015801484);
});