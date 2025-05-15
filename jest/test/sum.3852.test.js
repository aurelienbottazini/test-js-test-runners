const sum = require('../sum');

test('adds 53 + 26 to equal 79', () => {
  expect(sum(53, 26)).toBe(79);
});