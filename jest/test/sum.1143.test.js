const sum = require('../sum');

test('adds 21 + 58 to equal 79', () => {
  expect(sum(21, 58)).toBe(79);
});