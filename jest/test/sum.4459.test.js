const sum = require('../sum');

test('adds 85 + 58 to equal 143', () => {
  expect(sum(85, 58)).toBe(143);
});