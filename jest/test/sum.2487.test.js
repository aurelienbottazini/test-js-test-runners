const sum = require('../sum');

test('adds 23 + 49 to equal 72', () => {
  expect(sum(23, 49)).toBe(72);
});