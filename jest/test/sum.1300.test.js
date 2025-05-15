const sum = require('../sum');

test('adds 7 + 76 to equal 83', () => {
  expect(sum(7, 76)).toBe(83);
});