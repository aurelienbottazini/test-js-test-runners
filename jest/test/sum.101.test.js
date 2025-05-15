const sum = require('../sum');

test('adds 61 + 22 to equal 83', () => {
  expect(sum(61, 22)).toBe(83);
});