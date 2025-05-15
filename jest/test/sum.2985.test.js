const sum = require('../sum');

test('adds 15 + 64 to equal 79', () => {
  expect(sum(15, 64)).toBe(79);
});