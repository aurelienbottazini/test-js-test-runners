const sum = require('../sum');

test('adds 37 + 1 to equal 38', () => {
  expect(sum(37, 1)).toBe(38);
});