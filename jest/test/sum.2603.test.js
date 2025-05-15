const sum = require('../sum');

test('adds 36 + 2 to equal 38', () => {
  expect(sum(36, 2)).toBe(38);
});