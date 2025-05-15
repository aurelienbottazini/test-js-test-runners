const sum = require('../sum');

test('adds 56 + 23 to equal 79', () => {
  expect(sum(56, 23)).toBe(79);
});