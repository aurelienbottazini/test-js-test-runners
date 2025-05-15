const sum = require('../sum');

test('adds 47 + 32 to equal 79', () => {
  expect(sum(47, 32)).toBe(79);
});