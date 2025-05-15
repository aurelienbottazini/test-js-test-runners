const sum = require('../sum');

test('adds 1 + 78 to equal 79', () => {
  expect(sum(1, 78)).toBe(79);
});