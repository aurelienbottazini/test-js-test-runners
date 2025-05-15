const sum = require('../sum');

test('adds 76 + 7 to equal 83', () => {
  expect(sum(76, 7)).toBe(83);
});