const sum = require('../sum');

test('adds 28 + 3 to equal 31', () => {
  expect(sum(28, 3)).toBe(31);
});