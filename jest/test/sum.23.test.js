const sum = require('../sum');

test('adds 56 + 27 to equal 83', () => {
  expect(sum(56, 27)).toBe(83);
});