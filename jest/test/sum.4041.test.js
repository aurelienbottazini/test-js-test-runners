const sum = require('../sum');

test('adds 24 + 64 to equal 88', () => {
  expect(sum(24, 64)).toBe(88);
});