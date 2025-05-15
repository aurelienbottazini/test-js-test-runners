const sum = require('../sum');

test('adds 41 + 38 to equal 79', () => {
  expect(sum(41, 38)).toBe(79);
});