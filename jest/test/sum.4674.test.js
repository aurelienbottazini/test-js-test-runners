const sum = require('../sum');

test('adds 52 + 91 to equal 143', () => {
  expect(sum(52, 91)).toBe(143);
});