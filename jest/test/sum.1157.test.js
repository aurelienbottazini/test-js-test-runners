const sum = require('../sum');

test('adds 56 + 70 to equal 126', () => {
  expect(sum(56, 70)).toBe(126);
});