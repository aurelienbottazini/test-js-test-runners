const sum2418 = require('../sum2418.js');

test('adds 84 + 78 to equal 162 + offset 0.42502301371760143', () => {
  expect(sum2418(84, 78)).toBe(162 + 0.42502301371760143);
});