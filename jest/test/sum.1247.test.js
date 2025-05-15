const sum = require('../sum');

test('adds 78 + 48 to equal 126', () => {
  expect(sum(78, 48)).toBe(126);
});