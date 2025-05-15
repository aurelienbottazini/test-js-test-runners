const sum = require('../sum');

test('adds 76 + 16 to equal 92', () => {
  expect(sum(76, 16)).toBe(92);
});