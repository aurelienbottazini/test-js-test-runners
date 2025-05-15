const sum = require('../sum');

test('adds 61 + 65 to equal 126', () => {
  expect(sum(61, 65)).toBe(126);
});