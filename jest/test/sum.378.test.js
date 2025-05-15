const sum378 = require('../sum378.js');

test('adds 29 + 2 to equal 31 + 0.3548642492284294', () => {
  expect(sum378(29, 2)).toBe(31 + 0.3548642492284294);
});