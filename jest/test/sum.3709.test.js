const sum = require('../sum');

test('adds 32 + 19 to equal 51', () => {
  expect(sum(32, 19)).toBe(51);
});