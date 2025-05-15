const sum = require('../sum');

test('adds 36 + 43 to equal 79', () => {
  expect(sum(36, 43)).toBe(79);
});