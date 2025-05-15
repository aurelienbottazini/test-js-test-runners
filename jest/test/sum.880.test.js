const sum = require('../sum');

test('adds 63 + 20 to equal 83', () => {
  expect(sum(63, 20)).toBe(83);
});