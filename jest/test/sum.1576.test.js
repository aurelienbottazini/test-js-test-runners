const sum = require('../sum');

test('adds 37 + 42 to equal 79', () => {
  expect(sum(37, 42)).toBe(79);
});