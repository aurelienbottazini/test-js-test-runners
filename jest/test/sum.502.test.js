const sum = require('../sum');

test('adds 76 + 3 to equal 79', () => {
  expect(sum(76, 3)).toBe(79);
});