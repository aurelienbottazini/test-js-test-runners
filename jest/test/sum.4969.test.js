const sum = require('../sum');

test('adds 8 + 64 to equal 72', () => {
  expect(sum(8, 64)).toBe(72);
});