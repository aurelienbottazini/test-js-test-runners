const sum = require('../sum');

test('adds 38 + 88 to equal 126', () => {
  expect(sum(38, 88)).toBe(126);
});