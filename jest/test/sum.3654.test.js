const sum = require('../sum');

test('adds 39 + 40 to equal 79', () => {
  expect(sum(39, 40)).toBe(79);
});