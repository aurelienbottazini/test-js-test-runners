const sum = require('../sum');

test('adds 8 + 84 to equal 92', () => {
  expect(sum(8, 84)).toBe(92);
});