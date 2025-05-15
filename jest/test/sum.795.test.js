const sum = require('../sum');

test('adds 45 + 98 to equal 143', () => {
  expect(sum(45, 98)).toBe(143);
});