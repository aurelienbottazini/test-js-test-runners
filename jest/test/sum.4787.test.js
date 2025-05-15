const sum = require('../sum');

test('adds 13 + 70 to equal 83', () => {
  expect(sum(13, 70)).toBe(83);
});