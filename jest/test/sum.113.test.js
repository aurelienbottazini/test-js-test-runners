const sum = require('../sum');

test('adds 63 + 80 to equal 143', () => {
  expect(sum(63, 80)).toBe(143);
});