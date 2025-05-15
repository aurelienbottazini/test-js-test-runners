const sum = require('../sum');

test('adds 27 + 1 to equal 28', () => {
  expect(sum(27, 1)).toBe(28);
});