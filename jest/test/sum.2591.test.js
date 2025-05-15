const sum = require('../sum');

test('adds 12 + 80 to equal 92', () => {
  expect(sum(12, 80)).toBe(92);
});