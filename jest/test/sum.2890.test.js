const sum = require('../sum');

test('adds 31 + 48 to equal 79', () => {
  expect(sum(31, 48)).toBe(79);
});