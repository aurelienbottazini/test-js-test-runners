const sum = require('../sum');

test('adds 0 + 38 to equal 38', () => {
  expect(sum(0, 38)).toBe(38);
});