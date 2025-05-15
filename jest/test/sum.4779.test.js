const sum = require('../sum');

test('adds 28 + 51 to equal 79', () => {
  expect(sum(28, 51)).toBe(79);
});