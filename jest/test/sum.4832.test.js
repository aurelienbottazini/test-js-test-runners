const sum = require('../sum');

test('adds 43 + 36 to equal 79', () => {
  expect(sum(43, 36)).toBe(79);
});