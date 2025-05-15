const sum = require('../sum');

test('adds 39 + 44 to equal 83', () => {
  expect(sum(39, 44)).toBe(83);
});