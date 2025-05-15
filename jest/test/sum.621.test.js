const sum = require('../sum');

test('adds 0 + 83 to equal 83', () => {
  expect(sum(0, 83)).toBe(83);
});