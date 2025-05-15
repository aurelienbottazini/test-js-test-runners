const sum = require('../sum');

test('adds 24 + 4 to equal 28', () => {
  expect(sum(24, 4)).toBe(28);
});