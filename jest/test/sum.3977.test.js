const sum = require('../sum');

test('adds 27 + 65 to equal 92', () => {
  expect(sum(27, 65)).toBe(92);
});