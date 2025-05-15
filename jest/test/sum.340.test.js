const sum = require('../sum');

test('adds 56 + 82 to equal 138', () => {
  expect(sum(56, 82)).toBe(138);
});