const sum = require('../sum');

test('adds 57 + 86 to equal 143', () => {
  expect(sum(57, 86)).toBe(143);
});