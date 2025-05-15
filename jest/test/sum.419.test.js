const sum = require('../sum');

test('adds 24 + 82 to equal 106', () => {
  expect(sum(24, 82)).toBe(106);
});