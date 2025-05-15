const sum = require('../sum');

test('adds 34 + 49 to equal 83', () => {
  expect(sum(34, 49)).toBe(83);
});