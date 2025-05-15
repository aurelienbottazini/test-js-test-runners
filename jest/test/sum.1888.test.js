const sum = require('../sum');

test('adds 8 + 51 to equal 59', () => {
  expect(sum(8, 51)).toBe(59);
});