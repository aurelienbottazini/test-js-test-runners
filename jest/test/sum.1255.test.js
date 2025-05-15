const sum = require('../sum');

test('adds 92 + 0 to equal 92', () => {
  expect(sum(92, 0)).toBe(92);
});