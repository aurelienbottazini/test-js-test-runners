const sum = require('../sum');

test('adds 9 + 3 to equal 12', () => {
  expect(sum(9, 3)).toBe(12);
});