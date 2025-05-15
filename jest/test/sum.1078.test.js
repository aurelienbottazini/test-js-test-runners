const sum = require('../sum');

test('adds 82 + 61 to equal 143', () => {
  expect(sum(82, 61)).toBe(143);
});