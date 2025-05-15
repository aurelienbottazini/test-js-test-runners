const sum = require('../sum');

test('adds 50 + 93 to equal 143', () => {
  expect(sum(50, 93)).toBe(143);
});