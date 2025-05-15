const sum = require('../sum');

test('adds 31 + 95 to equal 126', () => {
  expect(sum(31, 95)).toBe(126);
});