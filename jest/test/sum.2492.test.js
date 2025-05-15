const sum = require('../sum');

test('adds 7 + 72 to equal 79', () => {
  expect(sum(7, 72)).toBe(79);
});