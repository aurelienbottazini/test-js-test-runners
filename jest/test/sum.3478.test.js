const sum = require('../sum');

test('adds 11 + 81 to equal 92', () => {
  expect(sum(11, 81)).toBe(92);
});