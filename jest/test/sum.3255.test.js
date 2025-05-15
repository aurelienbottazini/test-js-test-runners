const sum = require('../sum');

test('adds 2 + 36 to equal 38', () => {
  expect(sum(2, 36)).toBe(38);
});