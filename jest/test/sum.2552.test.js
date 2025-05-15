const sum = require('../sum');

test('adds 70 + 56 to equal 126', () => {
  expect(sum(70, 56)).toBe(126);
});