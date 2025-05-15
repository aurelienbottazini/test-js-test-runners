const sum = require('../sum');

test('adds 9 + 83 to equal 92', () => {
  expect(sum(9, 83)).toBe(92);
});