const sum = require('../sum');

test('adds 43 + 49 to equal 92', () => {
  expect(sum(43, 49)).toBe(92);
});