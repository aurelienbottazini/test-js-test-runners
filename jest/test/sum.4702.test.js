const sum = require('../sum');

test('adds 71 + 72 to equal 143', () => {
  expect(sum(71, 72)).toBe(143);
});