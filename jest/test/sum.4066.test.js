const sum = require('../sum');

test('adds 52 + 27 to equal 79', () => {
  expect(sum(52, 27)).toBe(79);
});