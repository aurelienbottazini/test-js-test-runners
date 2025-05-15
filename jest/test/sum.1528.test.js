const sum = require('../sum');

test('adds 18 + 99 to equal 117', () => {
  expect(sum(18, 99)).toBe(117);
});