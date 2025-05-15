const sum = require('../sum');

test('adds 56 + 87 to equal 143', () => {
  expect(sum(56, 87)).toBe(143);
});