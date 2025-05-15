const sum = require('../sum');

test('adds 52 + 40 to equal 92', () => {
  expect(sum(52, 40)).toBe(92);
});