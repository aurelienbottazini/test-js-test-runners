const sum = require('../sum');

test('adds 90 + 2 to equal 92', () => {
  expect(sum(90, 2)).toBe(92);
});