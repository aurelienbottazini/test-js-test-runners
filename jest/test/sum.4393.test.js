const sum = require('../sum');

test('adds 23 + 56 to equal 79', () => {
  expect(sum(23, 56)).toBe(79);
});