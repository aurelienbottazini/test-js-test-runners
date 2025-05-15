const sum = require('../sum');

test('adds 41 + 85 to equal 126', () => {
  expect(sum(41, 85)).toBe(126);
});