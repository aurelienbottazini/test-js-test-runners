const sum = require('../sum');

test('adds 1 + 27 to equal 28', () => {
  expect(sum(1, 27)).toBe(28);
});