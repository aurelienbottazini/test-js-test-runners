const sum = require('../sum');

test('adds 82 + 62 to equal 144', () => {
  expect(sum(82, 62)).toBe(144);
});