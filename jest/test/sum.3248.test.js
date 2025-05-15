const sum = require('../sum');

test('adds 41 + 51 to equal 92', () => {
  expect(sum(41, 51)).toBe(92);
});