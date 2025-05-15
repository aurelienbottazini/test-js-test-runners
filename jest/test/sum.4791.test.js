const sum = require('../sum');

test('adds 92 + 51 to equal 143', () => {
  expect(sum(92, 51)).toBe(143);
});