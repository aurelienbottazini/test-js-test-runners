const sum = require('../sum');

test('adds 31 + 61 to equal 92', () => {
  expect(sum(31, 61)).toBe(92);
});