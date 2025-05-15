const sum = require('../sum');

test('adds 75 + 56 to equal 131', () => {
  expect(sum(75, 56)).toBe(131);
});