const sum = require('../sum');

test('adds 69 + 23 to equal 92', () => {
  expect(sum(69, 23)).toBe(92);
});