const sum = require('../sum');

test('adds 65 + 61 to equal 126', () => {
  expect(sum(65, 61)).toBe(126);
});