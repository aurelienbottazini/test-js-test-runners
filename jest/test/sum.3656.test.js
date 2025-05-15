const sum = require('../sum');

test('adds 75 + 68 to equal 143', () => {
  expect(sum(75, 68)).toBe(143);
});