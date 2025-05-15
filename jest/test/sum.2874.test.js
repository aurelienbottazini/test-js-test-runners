const sum = require('../sum');

test('adds 4 + 82 to equal 86', () => {
  expect(sum(4, 82)).toBe(86);
});