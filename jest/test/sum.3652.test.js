const sum = require('../sum');

test('adds 54 + 25 to equal 79', () => {
  expect(sum(54, 25)).toBe(79);
});