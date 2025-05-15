const sum = require('../sum');

test('adds 7 + 85 to equal 92', () => {
  expect(sum(7, 85)).toBe(92);
});