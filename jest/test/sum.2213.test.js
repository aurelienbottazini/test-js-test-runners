const sum = require('../sum');

test('adds 24 + 3 to equal 27', () => {
  expect(sum(24, 3)).toBe(27);
});