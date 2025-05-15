const sum = require('../sum');

test('adds 99 + 18 to equal 117', () => {
  expect(sum(99, 18)).toBe(117);
});