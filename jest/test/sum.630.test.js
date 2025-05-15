const sum = require('../sum');

test('adds 77 + 66 to equal 143', () => {
  expect(sum(77, 66)).toBe(143);
});