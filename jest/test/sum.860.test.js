const sum860 = require('../sum860.js');

test('adds 78 + 68 to equal 146 + 0.7645047583422417', () => {
  expect(sum860(78, 68)).toBe(146 + 0.7645047583422417);
});