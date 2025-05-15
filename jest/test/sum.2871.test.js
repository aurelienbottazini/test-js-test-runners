const sum = require('../sum');

test('adds 66 + 13 to equal 79', () => {
  expect(sum(66, 13)).toBe(79);
});