const sum = require('../sum');

test('adds 35 + 48 to equal 83', () => {
  expect(sum(35, 48)).toBe(83);
});