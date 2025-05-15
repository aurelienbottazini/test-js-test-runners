const sum = require('../sum');

test('adds 29 + 3 to equal 32', () => {
  expect(sum(29, 3)).toBe(32);
});