const sum = require('../sum');

test('adds 19 + 64 to equal 83', () => {
  expect(sum(19, 64)).toBe(83);
});