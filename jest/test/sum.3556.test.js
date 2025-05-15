const sum = require('../sum');

test('adds 32 + 20 to equal 52', () => {
  expect(sum(32, 20)).toBe(52);
});