const sum = require('../sum');

test('adds 55 + 62 to equal 117', () => {
  expect(sum(55, 62)).toBe(117);
});