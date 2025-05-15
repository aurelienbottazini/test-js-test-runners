const sum = require('../sum');

test('adds 6 + 3 to equal 9', () => {
  expect(sum(6, 3)).toBe(9);
});